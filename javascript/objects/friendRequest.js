import { getToken } from "../objects/token.js";
import { showToast } from "../pages/main.js";

export class FriendRequest {
    constructor (id, requesterID, requesterUsername, requestedID, requestedUsername, status, message, created, updated) {
        this.id = id;
        this.requesterID = requesterID;
        this.requesterUsername = requesterUsername;
        this.requestedID = requestedID;
        this.requestedUsername = requestedUsername;
        this.status = status;
        this.message = message;
        this.created = created;
        this.updated = updated;
    }

    requestElementsForRequested() {
        const requestDiv = document.createElement("div");
        const responseDiv = document.createElement("div");
        const requesterUsername = document.createElement("h2");
        const status = document.createElement("p");
        let message = document.createElement("p");
        const created = document.createElement("i");
        const updated = document.createElement("i");
        const acceptBtn = document.createElement("button");
        const declineBtn = document.createElement("button");

        requestDiv.className = "friendRequestCard";
        responseDiv.className = "responseDiv";
        acceptBtn.className = "primaryBtn";
        declineBtn.className = "secondaryBtn";
        status.className = "status";

        acceptBtn.setAttribute("id", this.id);
        declineBtn.setAttribute("id", this.id);

        acceptBtn.textContent = "Accept";
        declineBtn.textContent = "Decline";

        requesterUsername.textContent = this.requesterUsername;
        status.textContent = "STATUS: " + this.status;
        message.textContent = checkMessages(this.message);
        created.textContent = this.created;
        updated.textContent = this.updated;

        if (!this.message) {
            message.style.fontStyle = "italic";
            message.style.textAlign = "center"
        }

        acceptBtn.addEventListener("click", ()=> acceptfriendRequest(requestDiv, acceptBtn.id));
        declineBtn.addEventListener("click", ()=> declineFriendRequest(requestDiv, declineBtn.id));

        responseDiv.append(created,status, acceptBtn, declineBtn);
        requestDiv.append(requesterUsername, message, responseDiv);

        return requestDiv;
    }
}

async function acceptfriendRequest(requestDiv, requestID) {
    let message;

    try {
        const response = await fetch(`http://localhost:8080/accept-friend-request/${requestID}`, {
            method: "POST",
            headers: {
                "Authorization": getToken(),
            },
        });

        if (!response.ok) {
            message = await response.text();
            throw new Error(message);
        }

        message = await response.text();
        showToast(message);
        requestDiv.parentNode.removeChild(requestDiv);

    } catch (error) {

    }
}

async function declineFriendRequest(requestDiv, requestID) {
    let message;

    try {
        const response = await fetch(`http://localhost:8080/decline-friend-request/${requestID}`, {
            method: "POST",
            headers: {
                "Authorization": getToken(),
            },
        });

        message = await response.text();

        if (!response.ok) {
            throw new Error(message);
        }

        showToast(message);
        requestDiv.parentNode.removeChild(requestDiv);


    } catch (error) {

    }
}

function checkMessages(message) {
    if (!message) {
        return "No message included in request."
    }

    return message;
}
