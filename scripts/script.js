// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");


// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

confirmPasswordInput.onkeyup = () => {
  confirmPasswordInput.classList.remove("is-valid");
  confirmPasswordInput.classList.remove("is-invalid");
};


// add callback function for submit button.
submitBtn.onclick = () => {
  let isValid = true; // check validate 

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    firstNameInput.classList.add("is-valid");
  }

  // validate last name
  if (lastNameInput.value === ""){
    lastNameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    lastNameInput.classList.add("is-valid")
  }

  // validate email
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInput.classList.add("is-valid");
  }

  // validate password
  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    passwordInput.classList.add("is-valid");
  }

  // validate confirm password
  if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value.length < 6) {
    confirmPasswordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    confirmPasswordInput.classList.add("is-valid");
  }

  if (isValid) alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  [firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
    input.value = "";
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
  });
};
