"use strict";

const body = document.querySelector("body");
const changeColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  changeColor.innerHTML = "#" + randomColor;
};

button.addEventListener("click", setBg);
setBg();

// const body = document.querySelector("body");
// const changeColor = document.querySelector(".color");

// body.addEventListener("click", getRandomHexColor);
// getRandomHexColor();

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// body.addEventListener("click", getRandomHexColorBody);
// getRandomHexColorBody();

// function getRandomHexColorBody() {
//   (document.body.style.backgroundColor = "#" + getRandomHexColor),
//     (changeColor.innerHTML = "#" + randomColor);
// }

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
