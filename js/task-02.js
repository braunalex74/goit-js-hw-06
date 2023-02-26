const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngr = document.querySelector("#ingredients");

const option = ingredients[0];

const titleEl = document.createElement("li");
titleEl.classList.add("item");
const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav__link");
navLinkEl.textContent = option;
navLinkEl.href = "/profile";

titleEl.appendChild(navLinkEl);

listIngr.appendChild(titleEl);
