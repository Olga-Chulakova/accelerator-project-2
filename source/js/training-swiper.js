import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const trainingSwiper = new Swiper ('.training-card__slider-wrapper', {
  modules: [Navigation, Mousewheel],
  allowTouchMove: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  initialSlide: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: '.training-card__slider-button--next',
    prevEl: '.training-card__slider-button--prev',
  },
  simulateTouch: true,
  touchRatio: 1,
});

trainingSwiper.init();
