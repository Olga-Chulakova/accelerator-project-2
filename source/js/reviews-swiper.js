import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviewsSwiper = new Swiper ('.reviews-card', {
  modules: [Navigation, Mousewheel],
  allowTouchMove: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 700,
  breakpoints: {
    1440: {
      spaceBetween: 120,
    }
  },
  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },
  simulateTouch: true,
  touchRatio: 1,
});

reviewsSwiper.init();
