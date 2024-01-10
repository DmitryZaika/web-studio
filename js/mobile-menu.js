const menu = document.querySelector(".mobile-menu");
const openMenuButton = document.querySelector(".js-open-menu-btn");
const closeMenuButton = document.querySelector(".js-close-menu-btn");

const toggleMenu = () => menu.classList.toggle("is-open");

openMenuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);

console.clear;
