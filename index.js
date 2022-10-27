console.log("hi");

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menuNav = document.querySelector(".menu-nav");
const backDrop = document.querySelector(".backdrop");

const toggleMenu = () => {
  menuNav.classList.toggle("hide");
  backDrop.classList.remove("hide");
};
const closeMenu = () => {
  console.log("clijj");
  menuNav.classList.add("hide");
  backDrop.classList.add("hide");
};
open.addEventListener("click", toggleMenu);
close.addEventListener("click", closeMenu);
backDrop.addEventListener("click", closeMenu);
