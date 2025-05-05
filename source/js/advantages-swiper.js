import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let swiperInstance = null;
let originalSwiperDivs = null;

function initSwiper() {
  const swiperWrapperDiv = document.querySelector('.advantages__card-wrapper .swiper-wrapper');
  const slideDivs = document.querySelectorAll('.advantages__card-wrapper .swiper-slide');
  originalSwiperDivs = slideDivs;
  slideDivs.forEach((slideDiv) => {
    const duplicateSlide = slideDiv.cloneNode(true);
    swiperWrapperDiv.appendChild(duplicateSlide);
  });
  swiperInstance = new Swiper('.advantages__card-wrapper', {
    modules: [Navigation, Mousewheel],
    direction: 'horizontal',
    slidesPerGroup: 2,
    slidesPerView: 'auto',

    spaceBetween: 30,
    loopAdditionalSlides: 1,
    loop: true,
    speed: 700,
    navigation: {
      nextEl: '.advantages__slider-button--next',
      prevEl: '.advantages__slider-button--prev',
    },
  });
}

function destroySwiper() {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;

    const swiperWrapperDiv = document.querySelector('.advantages__card-wrapper .swiper-wrapper');
    swiperWrapperDiv.replaceChildren(...originalSwiperDivs);
    originalSwiperDivs = null;
  }
}

function checkSwiper() {
  if (window.innerWidth >= 1440) {
    if (!swiperInstance) {
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

window.addEventListener('DOMContentLoaded', checkSwiper);
window.addEventListener('resize', checkSwiper);
