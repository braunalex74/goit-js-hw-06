const inputtxt = document.querySelector("#name-input");
const outputtxt = document.querySelector("#name-output");

inputtxt.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  outputtxt.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputtxt.textContent = "Anonymous";
  }
}
