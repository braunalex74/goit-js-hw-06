function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleWidget = document.querySelector(".widget");
const handleColor = document.querySelector(".color");
const handleChangeColor = document.querySelector(".change-color");
