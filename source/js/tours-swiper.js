import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const toursSwiper = new Swiper ('.tours-card', {
  modules: [Navigation, Mousewheel],
  allowTouchMove: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 18,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 17,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  navigation: {
    nextEl: '.tours__slider-button--next',
    prevEl: '.tours__slider-button--prev',
  },
  simulateTouch: true,
  touchRatio: 1,
});

toursSwiper.init();
