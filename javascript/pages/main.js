/**
 * show a 3 sec message displayed in upper part of the browser
 * @param {*} message to be displayed
 */
export function showToast(message) {
        const toastDiv = document.getElementById("toast");
        toastDiv.textContent = message;
        toastDiv.className = "show";
        setTimeout(() => 
                {toastDiv.className = toastDiv.className.replace("show", "");
                }, 3000);
}