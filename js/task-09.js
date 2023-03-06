function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleColor = document.querySelector(".color");
const handleChangeColor = document.querySelector(".change-color");

const body = document.body;

const changeColorFunction = () => {
  handleColor.textContent = body.style.backgroundColor = getRandomHexColor();
};

handleChangeColor.addEventListener("click", changeColorFunction);
