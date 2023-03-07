function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  handleIdControls: document.querySelector("#controls"),
  handleInputNumber: document.querySelector("input"),
  handleCreateBtn: document.querySelector("[data-create]"),
  handleDestroyBtn: document.querySelector("[data-destroy]"),
  handleIdBoxes: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    refs.handleIdBoxes.appendChild(divEl);
  }
}

refs.handleCreateBtn.addEventListener("click", () => {
  createBoxes(refs.handleInputNumber.value);
});

refs.handleDestroyBtn.addEventListener("click", () => {
  refs.handleIdBoxes.innerHTML = "";
});
