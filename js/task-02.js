"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUl = document.querySelector(`ul`);

const foodIngredients = ingredients.map((ingredient) => {
  const makeElementsLi = document.createElement(`li`);
  makeElementsLi.classList.add("item");
  makeElementsLi.textContent = ingredients;

  return makeElementsLi;
});

ingredientsUl.append(...foodIngredients);

console.log(ingredientsUl);
