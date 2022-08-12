"use strict";

const body = document.querySelector("body");
const changeColor = querySelector(".color");

body.addEventListener("click", getRandomHexColor);
getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

body.addEventListener("click", getRandomHexColorBody);
getRandomHexColorBody();

function getRandomHexColorBody() {
  return (
    (document.body.style.backgroundColor = "#" + randomColor),
  color.innerHTML = "#" + randomColor),
};

console.log(changeColor);
console.log(body);

// function getRandomHexColor() {
//   return (
//     `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`
//     (document.body.style.backgroundColor = "#" + randomColor),
//   color.innerHTML = "#" + randomColor),
// };

// const setBg = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   color.innerHTML = "#" + randomColor;
// };
