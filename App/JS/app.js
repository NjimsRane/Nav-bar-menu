const hamburgerMenu = document.querySelector(".hamburger-menu");
const navNab = document.querySelector(".nav-bar");

hamburgerMenu.addEventListener("click",function(){
    hamburgerMenu.classList.toggle("hamburger-menu-change");
    navNab.classList.toggle("show-nav-bar");
});