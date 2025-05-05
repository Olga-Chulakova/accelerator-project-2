import Swiper from 'swiper';
import {Navigation, Pagination, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// const heroSwiper = new Swiper('.hero-swiper', {
//   modules: [Pagination, Mousewheel],
//   loop: true,
//   allowTouchMove: true,
//   simulateTouch: true,
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: '.hero-swiper .swiper-pagination',
//     type: 'bullets',
//     clickable: false,
//     bulletClass: 'hero-swiper__bullet',
//     bulletActiveClass: 'hero-swiper__bullet--active',
//     renderBullet: function (index, className) {
//       return `<span class="${className}" tabindex="0" role="button" aria-label="Перейти к слайду ${index + 1}"></span>`;
//     },
//   },
//   breakpoints: {
//     1400: {
//       pagination: {
//         clickable: true,
//       },
//       allowTouchMove: false,
//     }
//   },
//   touchRatio: 1,


// on: {
//   init: function () {
//     const bullets = document.querySelectorAll('.hero-swiper__bullet');
//     bullets.forEach((bullet, index) => {
//       bullet.addEventListener('keydown', (event) => {
//         if (event.key === 'Enter' || event.key === ' ') {
//           // Триггерим событие click на буллете
//           bullet.click();
//           event.preventDefault(); // Предотвращаем стандартное действие
//         }
//       });
//     });
//     updateAriaCurrent();
//   },
//   slideChange: function () {
//     updateAriaCurrent();
//   },
// },


// });

// function updateAriaCurrent() {
//   const bullets = document.querySelectorAll('.hero-swiper__bullet');
//   bullets.forEach((bullet, index) => {
//     if (heroSwiper.activeIndex === index) {
//       bullet.setAttribute('aria-current', 'true');
//     } else {
//       bullet.removeAttribute('aria-current');
//     }
//   });
// }

// heroSwiper.init();

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

// const reviewsSwiper = new Swiper ('.reviews-card', {
//   modules: [Navigation, Mousewheel],
//   allowTouchMove: true,
//   slidesPerView: 'auto',
//   spaceBetween: 30,
//   breakpoints: {
//     1440: {
//       spaceBetween: 120,
//     }
//   },
//   navigation: {
//     nextEl: '.reviews__slider-button--next',
//     prevEl: '.reviews__slider-button--prev',
//   },
//   simulateTouch: true,
//   touchRatio: 1,
// });

// reviewsSwiper.init();


// let swiperInstance = null;
// let originalSwiperDivs = null;

// function initSwiper() {
//   const swiperWrapperDiv = document.querySelector('.advantages__card-wrapper .swiper-wrapper');
//   const slideDivs = document.querySelectorAll('.advantages__card-wrapper .swiper-slide');
//   originalSwiperDivs = slideDivs;
//   slideDivs.forEach((slideDiv) => {
//     const duplicateSlide = slideDiv.cloneNode(true);
//     swiperWrapperDiv.appendChild(duplicateSlide);
//   });
//   //const realSlidesCount = slideDivs.length;
//   swiperInstance = new Swiper('.advantages__card-wrapper', {
//     modules: [Navigation, Mousewheel],
//     direction: 'horizontal',
//     slidesPerGroup: 2,
//     //initialSlide: 2,
//     slidesPerView: 'auto',

//     spaceBetween: 30,
//     //loopedSlidesLimit: null,
//     loopAdditionalSlides: 1,
//     //loopedSlides: realSlidesCount,
//     //slidesOffsetBefore: -290,
//     //centeredSlides: 'auto',
//     //observer: true,
//     loop: true,
//     speed: 700,
//     //loopedSlides: 3.2,
//     navigation: {
//       nextEl: '.advantages__slider-button--next',
//       prevEl: '.advantages__slider-button--prev',
//     },
//   });
// }

// function destroySwiper() {
//   if (swiperInstance) {
//     swiperInstance.destroy(true, true);
//     swiperInstance = null;

//     const swiperWrapperDiv = document.querySelector('.advantages__card-wrapper .swiper-wrapper');
//     swiperWrapperDiv.replaceChildren(...originalSwiperDivs);
//     originalSwiperDivs = null;
//   }
// }

// function checkSwiper() {
//   if (window.innerWidth >= 1440) {
//     if (!swiperInstance) {
//       initSwiper();
//     }
//   } else {
//     destroySwiper();
//   }
// }

// window.addEventListener('DOMContentLoaded', checkSwiper);
// window.addEventListener('resize', checkSwiper);
