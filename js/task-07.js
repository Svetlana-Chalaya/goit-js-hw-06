"use strict";

const inputSize = document.querySelector("#font-size-control");
const textInput = document.querySelector("#text");

function handleText(event) {
  textInput.style.fontSize = event.currentTarget.value + "px";
}

inputSize.addEventListener("input", handleText);

console.log(handleText);
console.log(inputSize);
