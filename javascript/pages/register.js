import { showToast } from "../pages/main.js";

const registerButton = document.getElementById("registerBtn");
const usernameField = document.getElementById("usernameInput");
const passwordField = document.getElementById("passwordInput");
const confirmPasswordField = document.getElementById("confirmPasswordInput");

registerButton.addEventListener("click", register);

function register() {
    console.log(usernameField.value, passwordField.value, confirmPasswordField.value);
    
    if (!usernameField.value) {
        showToast("You haven't filled the username. This is a mandatory field.");
        return;
    }

    if (!passwordField.value || !confirmPasswordField.value) {
        showToast("You haven't filled one or two of the password fields. Please fill all password fields as they are mandatory fields.");
        return;
    }

    if (passwordField.value !== confirmPasswordField.value) {
        showToast("Your passwords do not match. Please try again.")
        return;
    }
    
}