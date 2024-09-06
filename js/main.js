$(document).ready(function () {
  $(".credit").slick({
    dots: true,
    nextArrow: `<button class="slick-next slick-arrow"><i class="fa-solid fa-chevron-right"></i></button>`,
    prevArrow: `<button class="slick-prev slick-arrow"><i class="fa-solid fa-chevron-left"></i></button>`
  });
});

//
$(document).ready(function () {
  $(".maybe-list").slick({
    // dots: true,
    slidesToShow: 6,
    infinite: true,
    nextArrow: `<button class="slick-next slick-arrow arrow-maybe arrow-maybe-next"><i class="fa-solid fa-chevron-right"></i></button>`,
    prevArrow: `<button class="slick-prev slick-arrow arrow-maybe arrow-maybe-prev"><i class="fa-solid fa-chevron-left"></i></button>`
  });
});

// $(document).ready(function () {
//   $(".service-list").slick({
//     dots: true,
//     nextArrow: `<button class="slick-next slick-arrow"><i class="fa-solid fa-chevron-right"></i></button>`,
//     prevArrow: `<button class="slick-prev slick-arrow"><i class="fa-solid fa-chevron-left"></i></button>`
//   });
// });

// $(document).ready(function () {
//   $(".service-list").slick({
//     // dots: true,
//     arrows: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     // infinite: true,

//     nextArrow: `<button class="slick-next slick-arrow"><i class="fa-solid fa-chevron-right"></i></button>`,
//     prevArrow: `<button class="slick-prev slick-arrow"><i class="fa-solid fa-chevron-left"></i></button>`
//   });
// });

//
//
//

// var stickyEl = new Sticksy(".bottom-wrap");
// // you can handle state changing

// stickyEl.onStateChanged = function (state) {
//   console.log(state);
//   if (state === "stuck") {
//     stickyEl.nodeRef.classList.add("widget--sticky");
//   } else {
//     stickyEl.nodeRef.classList.remove("widget--sticky");
//   }
// };

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1
//     },
//     600: {
//       items: 3
//     },
//     1000: {
//       items: 5
//     }
//   }
// });
