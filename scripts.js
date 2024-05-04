const password = document.getElementById("password");
let passwordValue;
const passwordReenter = document.getElementById("password-confirmation");
let passwordReenterValue;
const passwordSpan = document.querySelector(".password-validation");

function validatePasswords() {
  if (
    passwordValue != passwordReenterValue ||
    (passwordValue == "" && passwordReenterValue == "")
  ) {
    passwordSpan.textContent = "* Passwords do not match";
    passwordSpan.classList.remove("valid");
  } else {
    passwordSpan.textContent = "* Passwords do match";
    passwordSpan.classList.add("valid");
  }
}

function setPasswordsValuesAndValidate() {
  password.addEventListener("input", (e) => {
    passwordValue = e.target.value;
    validatePasswords();
  });

  passwordReenter.addEventListener("input", (e) => {
    passwordReenterValue = e.target.value;
    validatePasswords();
  });
}

setPasswordsValuesAndValidate();
