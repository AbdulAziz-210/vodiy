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

// const item = document.querySelector(".go-to-item");
// const img = document.querySelector(".go-to-img");

// function first() {}
