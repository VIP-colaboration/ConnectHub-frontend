import { showToast } from "../pages/main.js";

const registerButton = document.getElementById("registerBtn");
const usernameField = document.getElementById("usernameInput");
const passwordField = document.getElementById("passwordInput");
const confirmPasswordField = document.getElementById("confirmPasswordInput");

registerButton.addEventListener("click", register);

async function register() {    
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

    let message;

    try {
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            body: {
                "username" : usernameField.value,
                "password" : passwordField.value,
            }
        });
        message = response.status + " : registration successful, your user ID is " + response.text() + " You can now login.";
    } catch (error) {
        message = error.text();
    }

    showToast(message);
}