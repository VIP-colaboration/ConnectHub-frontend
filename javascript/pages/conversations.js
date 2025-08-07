import { getToken, getUserID } from "../objects/token.js";
import { showToast } from "./main.js";

const openConversationFormBtn = document.getElementById("openConversationFormBtn");
const conversationUserIdInput = document.getElementById("conversationUserIdInput");
const messageTextInput = document.getElementById("messageTextInput");

openConversationFormBtn.addEventListener("click", () => {
    conversationForm.classList.toggle("hiddenForm");
});
createConversationBtn.addEventListener("click", () => {
    startConversation();
});
const conversationForm = document.getElementById("conversationForm");

function emptyAndCloseConversationForm() {
    conversationUserIdInput.value = "";
    messageTextInput.value = "";
    conversationForm.classList.toggle("hiddenForm");
}

async function startConversation() {
    const conversationId = await startConversationRequest();
    if (!conversationId) {
        showToast("Error while saving conversation.")
        return;
    }
    console.log(conversationId);
}

async function startConversationRequest() {
    try {
        // First request - start conversation (using URL parameters)
        const conversationResponse = await fetch(`http://localhost:8080/start-conversation?user2=${conversationUserIdInput.value}`, {
            method: "POST",
            headers: {
                "Authorization": getToken(),
                "Content-Type": "application/json",
            }
        });

        if (!conversationResponse.ok) {
            const message = await conversationResponse.text();
            throw new Error(message);
        }

        const conversationId = await conversationResponse.text(); // Response is just the UUID as text

        // Second request - send initial message (conversationId as URL param, content as body)
        const messageResponse = await fetch(`http://localhost:8080/send-message?conversationId=${conversationId}`, {
            method: "POST",
            headers: {
                "Authorization": getToken(),
                "Content-Type": "text/plain", // Change to text/plain since you're sending raw text
            },
            body: messageTextInput.value // Send content as raw text, not JSON
        });

        if (!messageResponse.ok) {
            const message = await messageResponse.text();
            throw new Error(message);
        }

        return conversationId; // Return the conversation ID

    } catch (error) {
        console.log(error.message);
        return false;
    }
}