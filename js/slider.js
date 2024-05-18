new Swiper('.slider__wrapper', {
  wrapperClass: 'slider__row',
  slideClass: 'slider__column',
  spaceBetween: 30,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
    bulletClass: 'slider__dot',
    bulletActiveClass: 'slider__dot_active',
  },
})
