const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);

listItem.forEach((itemEl) => {
  console.log(`Category: ${itemEl.firstElementChild.textContent}`);
  console.log(`Elements: ${itemEl.lastElementChild.childElementCount}`);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
