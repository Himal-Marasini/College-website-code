const anotherMenu = document.querySelector('.forMenu');
const nav = document.querySelector('nav');
const header__item = document.querySelector(".header-nav__item");
const header__items = document.querySelector(".header-nav__items");

anotherMenu.addEventListener('click', e => {
    header__item.classList.toggle('nav--close');
});