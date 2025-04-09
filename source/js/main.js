// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const buttonMenu = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__nav');

buttonMenu.onclick = () => {
  menu.classList.toggle('active');
};
