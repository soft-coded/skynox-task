const thumbsSwiper = new Swiper(".thumbnails", {
  spaceBetween: 15,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true
});
const carouselSwiper = new Swiper(".carousel", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: thumbsSwiper
  }
});
