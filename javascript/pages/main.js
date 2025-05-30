export function showToast(message) {
        const toastiv = document.getElementById("toast");
        toastiv.textContent = message;
        toastiv.className = "show";
        setTimeout(() => 
                {toastiv.className = toastiv.className.replace("show", "");
                }, 3000);
}