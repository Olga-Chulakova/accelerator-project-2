import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';


let swiperInstance;

function initSwiper() {
  swiperInstance = new Swiper('.gallery__slider-wrapper', {
    modules: [Navigation, Mousewheel],
    direction: 'horizontal',
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 5,
    speed: 700,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: '.gallery__slider-button--next',
      prevEl: '.gallery__slider-button--prev',
    },
  });
}

function destroySwiper() {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;

    const gallerySliderWrapper = document.querySelector('.gallery__slider-wrapper');
    if (gallerySliderWrapper) {
      gallerySliderWrapper.classList.remove('swiper');
    }
  }
}

function checkSwiper() {
  if (window.innerWidth < 1440) {
    if (!swiperInstance) {
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

window.addEventListener('DOMContentLoaded', checkSwiper);
window.addEventListener('resize', checkSwiper);
