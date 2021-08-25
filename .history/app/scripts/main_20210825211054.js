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
// const wedoItem = document.querySelectorAll(".wedo-item");
// const wedoHeader = document.querySelectorAll(".wedo-item-header");
// // const wedoContent = document.querySelectorAll(".wedo-item-content");
// wedoHeader.forEach((item) =>
//   item.addEventListener("click", (e) => {
//     const content = item.nextElementSibling;
//     const icon = item.querySelector(".wedo-item-arrow");
//     content.classList.remove("active");
//     // content.classList.add("active");
//     if (content.classList.contains("active")) {
//       content.style.display = "block";
//       icon.classList.add("fa-angle-up");
//     } else {
//       icon.classList.add("fa-angle-down");
//     }
//   })
// );

//acordition
$(document).ready(function () {
  $(".wedo-content .wedo-item .wedo-item-header").click(function (e) {
    e.preventDefault(); // ngăn sự kiện chuyển trang
    $(this)
      .toggleClass("active")
      // .find("i")

      // .toggleClass("fa-angle-up")
      // .toggleClass("fa-angle-down")
      .removeClass("active")
      .find("i")
      // .removeClass("fa-angle-up")
      // .addClass("fa-angle-down");
      .toggleClass("fa-angle-up")
      .toggleClass("fa-angle-down");
    $(".wedo-content .wedo-item .wedo-item-content")
      .not($(this).next())
      .slideUp();
    $(this).next().slideToggle();
  });
});
