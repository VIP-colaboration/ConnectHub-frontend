const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", goToRegistrationPage);

function goToRegistrationPage() {
    window.location.href = "../html/register.html";
}