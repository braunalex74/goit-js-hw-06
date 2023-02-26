const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItemEl = document.createElement("li");
ingredientsItemEl.classList.add("item");
ingredientsItemEl.textContent = ingredients;
const navIngredientsEl = document.querySelector(".ingredients");
navIngredientsEl.appendChild(ingredientsItemEl);
