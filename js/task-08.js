const inputLoginFrom = document.querySelector(".login-form");

inputLoginFrom.addEventListener("submit", handleSubmit);
const profile = {};

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(`Email: ${profile.email}, Password: ${profile.password}`);
  }
  event.currentTarget.reset();
}

// function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);

//   formData.forEach((password, email) => {
//     console.log("handleSubmit -> name", email);
//     console.log("handleSubmit -> value", password);
//   });
// }
