function checkPassword(){
const inputPassword = document.getElementById("inputPassword").value.trim();
const message = document.getElementById("message");

let fullPattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`])/;

  if (inputPassword.length < 8) {
    message.textContent = "Password must be at least 8 characters long.";
    message.style.color = "red";
    return;
  }

  if (fullPattern.test(inputPassword)) {
    message.textContent = "Strong password!";
    message.style.color = "green";
  } else {
    message.textContent = "Password must include uppercase, lowercase, number, and symbol.";
    message.style.color = "orange";
  }
}

document.addEventListener("click", checkPassword);