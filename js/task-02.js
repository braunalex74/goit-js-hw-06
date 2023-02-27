const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngr = document.querySelector("#ingredients");

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const titleEl = document.createElement("li");
//   titleEl.classList.add("item");
//   titleEl.textContent = ingredients[i];
//   elements.push(titleEl);
// }
// listIngr.append(...elements);

// const elements = ingredients.map((option) => {
//   const titleEl = document.createElement("li");
//   titleEl.classList.add("item");
//   titleEl.textContent = option;
//   return titleEl;
// });
// listIngr.append(...elements);

const makeIngredients = (options) => {
  return options.map((option) => {
    const titleEl = document.createElement("li");
    titleEl.classList.add("item");
    titleEl.textContent = option;
    return titleEl;
  });
};
const elements = makeIngredients(ingredients);
listIngr.append(...elements);
