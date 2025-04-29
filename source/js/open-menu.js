const navMain = document.querySelector('.main-nav');
const button = document.querySelector('.header__button');
const menuList = document.querySelector('.menu__list');
const menuLinks = menuList.querySelectorAll('.menu__link');
const body = document.querySelector('.page-body');

button.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    body.classList.add('no-scroll');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    body.classList.remove('no-scroll');
  }
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    if (menuLink && navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      body.classList.remove('no-scroll');
    }
  });
});
