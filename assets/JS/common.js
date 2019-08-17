const hamburgerMenu = document.querySelector('.forMenu');
const header__item = document.querySelector(".header-nav__item");

hamburgerMenu.addEventListener('click', e => {
    header__item.classList.toggle('header-nav--open');
});