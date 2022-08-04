"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeElementsLi = document.createElement(`li`);
makeElementsLi.classList.add(`.item`);

makeElementsLi.append(...elements);

document.ul.appendChild(makeElementsLi);
console.log(document.ul);
console.log(makeElementsLi);

// const makeElementsLi = ingredients;

// const elements = ingredients.map((option) => {
//   ingredients.classList.add(`.item`);
//   makeElementsLi.append(...elements);

//   return elements;
// });
// console.log(makeElementsLi);

// makeElementsLi.classList.add(ingredients);
// makeElementsLi.textContent = `
// "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",`;
