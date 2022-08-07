"use strict";

const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.oninput = function () {
  if (input.value === "") {
    output.innerHTML = "Anonymous";
  } else {
    output.innerHTML = input.value;
  }
};

// const refs = {
//   input: document.querySelector("#name-input"),
//   output: document.querySelector("#name-output > span"),
// };

// refs.input.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   // console.log(event.currentTarget.value);
//   refs.output.textContent = event.currentTarget.value;
// }
