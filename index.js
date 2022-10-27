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

var a = "test";
var b = String("test");
var c = new String("test");

console.log(b == c);

var a = [99, 87, , 9];
a.find(function (value, index) {
  if (index == 2) {
    delete a[2];
  }
  console.log(index);
});

let propBar = "bar1";
let b2 = "bar2";

class Class1 {
  set [propBar](val) {
    this.value = val;
  }
}
let class2 = new Class1();
console.log(class2.value);

let z = 24 / 3 + 12 / 4 - 7;
console.log(z);
