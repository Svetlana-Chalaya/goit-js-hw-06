"use strict";

const itemEl = document.querySelectorAll(".item");
// const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}  `);

const categoriesArray = [...itemEl]
  .map(
    (categories) => `Categories: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
