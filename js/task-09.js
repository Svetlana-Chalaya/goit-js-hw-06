"use strict";

const body = document.querySelector("body");

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};

body.addEventListener("click", setBg);
setBg();

console.log(setBg);
console.log(body);
