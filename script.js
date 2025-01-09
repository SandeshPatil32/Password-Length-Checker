// Function to check password strength
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('password-strength');
  
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const weakPassword = /^[A-Za-z\d]{6,}$/;
  
    if (strongPassword.test(password)) {
      strengthIndicator.textContent = 'Strong Password';
      strengthIndicator.style.color = 'green';
    } else if (mediumPassword.test(password)) {
      strengthIndicator.textContent = 'Medium Password';
      strengthIndicator.style.color = 'orange';
    } else if (weakPassword.test(password)) {
      strengthIndicator.textContent = 'Weak Password';
      strengthIndicator.style.color = 'red';
    } else {
      strengthIndicator.textContent = 'Password is too weak';
      strengthIndicator.style.color = 'gray';
    }
  }




