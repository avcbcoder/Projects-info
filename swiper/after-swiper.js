var swiperTappy = new Swiper(".tappy-swipe", {
  // effect: 'coverflow',
  spaceBetween: 50,
  initialSlide: 1,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  // coverflowEffect: {
  //     rotate: 0,// set to 0 to stop rotation
  //     stretch: 0,
  //     depth: 0,
  //     modifier: 1,
  //     slideShadows: true,
  // },
  pagination: {
    el: ".tappy-dots",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

var swiperCollab = new Swiper(".collab-swipe", {
  // effect: 'coverflow',
  spaceBetween: 50,
  initialSlide: 1,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  // coverflowEffect: {
  //     rotate: 0,// set to 0 to stop rotation
  //     stretch: 0,
  //     depth: 0,
  //     modifier: 1,
  //     slideShadows: true,
  // },
  pagination: {
    el: ".collab-dots",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
