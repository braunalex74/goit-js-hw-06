let btnDecrement = document.querySelector("[data-action='decrement']");
let btnIncrement = document.querySelector("[data-action='increment']");
let countNumber = document.querySelector("value");

let counterValue = 0;

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
