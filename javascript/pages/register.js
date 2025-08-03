import { showToast } from "../pages/main.js";
import { setToken, removeToken } from "../objects/token.js";

const registerButton = document.getElementById("registerBtn");
const usernameField = document.getElementById("usernameInput");
const passwordField = document.getElementById("passwordInput");
const confirmPasswordField = document.getElementById("confirmPasswordInput");

registerButton.addEventListener("click", register);

/**
 * self-explanatory
 * calls on performAutoLogin
 */
async function register() {    
    if (!usernameField.value) {
        showToast("You haven't filled the username. This is a mandatory field.");
        return;
    }

    if (!emailInput.value) {
        showToast("You haven't filled the email. This is a mandatory field.");
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

    const username = usernameField.value;
    const email = emailInput.value;
    const password = passwordField.value;
    let message;
    let successful = false;
    try {
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "username" : username,
                "email" : email,
                "password" : password,
            })
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        message = response.status + " : registration successful, your user ID is " + await response.text() + " You can now login.";
        successful = true;
    } catch (error) {
        message = error.message;
    }
    // to allow toast display
    setTimeout(function() {
            showToast(message);
        }, 3000);

    if (successful) {
        setTimeout(function() {
            showToast("You will be redirected to your account page.");
        }, 3000)
        performAutoLogin(username, password);
    }

}

/**
 * after registering the user is autmatically looged, avoids the need to logg in directly after registering
 * @param {*} username 
 * @param {*} password 
 */
async function performAutoLogin(username, password) {
    try {
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({
                "username" : username,
                "password" : password,
            })
        });
        
        
        if (!response.ok) {
            console.log("response not ok on login");
            
            throw new Error("This should not be possible... sorry Dave I'm afraid I can't do that");
        }
        const token = await response.text();
        setToken(token);
        window.location.href = "account.html";
    } catch (error) {
        setTimeout(showToast(error.message), 3000);
        window.location.href = "index.html";
    }
}