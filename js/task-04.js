const btnDecrement = document.querySelector("[data-action='decrement']");
// const btnIncrement = document.querySelector(".increment");

btnDecrement.addEventListener("click", () => {
  console.log("Button was clicked");
});

btnDecrement.addEventListener("click", handleClick);
// btnIncrement.addEventListener("click", handleClick);
