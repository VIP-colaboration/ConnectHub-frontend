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
        const requesterUsername = document.createElement("h2");
        const status = document.createElement("p");
        const message = document.createElement("p");
        const created = document.createElement("i");
        const updated = document.createElement("i");
        const acceptBtn = document.createElement("button");
        const declineBtn = document.createElement("button");

        requestDiv.className = "friendRequestCard";
        acceptBtn.className = "primaryBtn";
        declineBtn.className = "secondaryBtn";
        status.className = "status";

        acceptBtn.setAttribute("id", this.id);
        declineBtn.setAttribute("id", this.id);

        acceptBtn.textContent = "Accept";
        declineBtn.textContent = "Decline";

        requesterUsername.textContent = this.requesterUsername;
        status.textContent = "STATUS: " + this.status;
        message.textContent = this.message;
        created.textContent = this.created;
        updated.textContent = this.updated;

        requestDiv.append(requesterUsername, message, created,status, acceptBtn, declineBtn);

        return requestDiv;

    
    }


}

