import { showToast} from "../pages/main.js"
import { setToken } from "../objects/token.js";

const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("usernameInput");
const passwordInput =document.getElementById("passwordInput");

registerBtn.addEventListener("click", goToRegistrationPage);
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("trying login");
    login();
});


/**
 * self-explanatory
 */
function goToRegistrationPage() {
    window.location.href = "../html/register.html";
}

/**
 * self-explanatory
 */
async function login() {
    console.log("login running");
    let message;
    console.log(usernameInput.value + " " + passwordInput.value);
    let username = usernameInput.value;
    let password = passwordInput.value;
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
                message = await response.text();
                throw new Error(message);
            }
            
            const token = await response.text();
            setToken(token);
            window.location.href = "account.html";
        } catch (error) {
            console.log(error.message);
            showToast(error.message);
        }
}

