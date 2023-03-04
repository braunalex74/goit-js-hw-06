const onInputText = document.querySelector("#font-size-control");
const onIdText = document.querySelector("#text");

const sizeOutText = ({ currentTarget }) => {
  onIdText.style.fontSize = `${currentTarget.value}px`;
};
onInputText.addEventListener("input", sizeOutText);
