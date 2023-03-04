const onTexInput = document.querySelector("#validation-input");
onTexInput.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    onTexInput.classList.add("valid");
  }
  onTexInput.classList.add("invalid");
});
