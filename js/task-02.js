const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrLiEl = document.createElement("li");
ingrLiEl.classList.add("item");
ingrLiEl.textContent = "Ingredient";
const listIngr = document.querySelector(".ingredients");
// listIngr.appendChild(ingrLiEl);

console.log(ingrLiEl);
