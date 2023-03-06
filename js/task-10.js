function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleIdControls = document.querySelector("#constrols");
const handleNumber = document.querySelector('[type="number"]');
const handleCreateBtn = document.querySelector("button[data-create]");
const handleDestroyBtn = document.querySelector("button[data-destroy]");
const handleIdBoxes = document.querySelector("#boxes");

handleIdBoxes.style.display = "flex";
handleIdBoxes.style.flexWrap = "wrap";
handleIdBoxes.style.alignItems = "center";
handleIdBoxes.style.marginTop = "30px";
