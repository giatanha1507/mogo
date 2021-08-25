// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

// Menu toggle
const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const active = "active";

menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(active);
});

window.addEventListener("click", (e) => {
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(active);
  }
});

// Slick
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

// Accordion
const wedo = document.querySelectorAll(".wedo-item-header");
[...wedo].forEach((item) => item.addEventListener("click", handleClick));
function handleClick(e) {
  console.log(`e.target`, e.target);
  e.target.nextElementSibling.classList.add(".active");
}
