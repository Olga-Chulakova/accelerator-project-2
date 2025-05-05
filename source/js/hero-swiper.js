import Swiper from 'swiper';
import {Pagination, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSwiper = new Swiper('.hero-slider', {
  modules: [Pagination, Mousewheel],
  loop: true,
  allowTouchMove: true,
  simulateTouch: true,
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 700,
  pagination: {
    el: '.hero-slider .swiper-pagination',
    type: 'bullets',
    clickable: false,
    bulletClass: 'hero-slider__bullet',
    bulletActiveClass: 'hero-slider__bullet--active',
    renderBullet: function (index, className) {
      return `<button class="${className}" tabindex="0" role="button" aria-label="Перейти к слайду ${index + 1}"></button>`;
    },
  },
  breakpoints: {
    1400: {
      pagination: {
        clickable: true,
      },
      allowTouchMove: false,
    }
  },
  touchRatio: 1,

  on: {
    slideChange: function () {
      this.slides.forEach((slide, index) => {
        const isActive = index === this.activeIndex;
        slide.querySelectorAll('a, button, input, textarea, select, [tabindex]')
          .forEach((el) => {
            el.tabIndex = isActive ? 0 : -1;
          });
      });
    },
  },

});

heroSwiper.init();
