// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

"use strict";

const refs = {
  input: document.querySelector('input[data-length="6"]'),
  inpitGeneral: document.querySelector("input"),
  style: document.querySelector("style"),
};

refs.inputVel.addEventListener("blur", oninput);

const oninput = function (event) {
  if (input.value.length === inpitGeneral) {
    inputVel.classList.add("valid");
    return "valid";
  } else {
    return "invalid";
  }
};

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });
