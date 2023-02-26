const categoryList = document.querySelector(".categories");

const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);

const listTitle = document.querySelector(".item");
const listItemEl = listTitle.lastElementChild;

console.log(`Category: ${listItemEl.textContent}`);
console.log(`Elements: ${listItemEl.childElementCount}`);

categories.forEach((category, index) => {
  console.log(`Index ${listTitle}, cat ${listItemEl}`);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
