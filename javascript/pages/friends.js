import { setToken, removeToken, getToken, saveProfilePicture, getProfilePicture, removeProfilePicture, getUserID, getUsername } from "../objects/token.js";
import { showToast } from "./main.js";
import { User } from "../objects/user.js";
import { FriendRequest } from "../objects/friendRequest.js";
import { showFriends } from "./addOnShowFriends.js";

//FIXED ELEMENTS (always diplayed/included)
const incomingRequestBtn = document.getElementById("incomingRequestBtn");
const outcomingRequestBtn = document.getElementById("outcomingRequestBtn");
const friendBtn = document.getElementById("friendBtn");
const userImage = document.getElementById("userImage");
const username = document.getElementById("username");
const userID =document.getElementById("userID");
const flexibleSection = document.getElementById("flexibleSection");
const friendRequestField = document.getElementById("friendRequestField");
const requestButton = document.getElementById("searchByUserIDBtn");
const messageField = document.getElementById("messageField");
const showMessageInput = document.getElementById("showMessageInput");

//FOR FLEXIBLE SECTION
const currentFriendRequests = document.createElement("h2");
const friendRequestTitle = document.createElement("h1");
const outGoingFriendRequestTitle = document.createElement("h1");
friendRequestTitle.textContent = "Incoming Friend Request";
outGoingFriendRequestTitle.textContent = "Outgoing Friend Request";

incomingRequestBtn.addEventListener("click", checkForFriendRequest);
outcomingRequestBtn.addEventListener("click", showOutgoingRequest);
friendBtn.addEventListener("click", getUserAndShowFriends);

requestButton.addEventListener("click", sendFriendRequest);
showMessageInput.addEventListener("click", () => {
    messageField.classList.toggle("hiddenField");
});

setUpUserDetail();
checkForFriendRequest();

function setUpUserDetail() {
    const localStorageImg = localStorage.getItem("profilePicture");
    
    if (localStorageImg) {
        userImage.setAttribute("src", localStorageImg);
        console.log("user image found")
    } else {
        console.error("User image not found in local storage");
    }
    
    username.textContent= getUsername();
    userID.textContent = getUserID();
}

async function checkForFriendRequest() {
    flexibleSection.innerHTML = "";

    let message;
    
    try {
        //fetch request
        const response = await fetch(`http://localhost:8080/get-pending-friend-requests`, {
            method: "GET",
            headers: {
                "Authorization": getToken(),
                "Content-type" : "application/json",
            },
        });

        if (!response.ok) {
            message = await response.text();
            throw new Error(message);
        }

        const friendRequestList = await response.json();
        if (friendRequestList.length === 0) {
            console.log("empty list");
            currentFriendRequests.textContent = "No friend request received";
            flexibleSection.append(currentFriendRequests);
        } else {

            flexibleSection.append(friendRequestTitle);
            //TODO: SETUP DISPLAY OF FRIEND REQUESTS
            for (let friendRequ of friendRequestList){
                const friendRequest = new FriendRequest (
                    friendRequ.id,
                    friendRequ.requesterID,
                    friendRequ.requesterUsername,
                    friendRequ.requestedID,
                    friendRequ.requestedUsername,
                    friendRequ.status,
                    friendRequ.message,
                    friendRequ.created,
                    friendRequ.updated,
                )
                
                flexibleSection.append(friendRequest.requestElementsForRequested());
            }
        }
        
    } catch (error) {
        console.log(error.message)
    }
}


async function sendFriendRequest() {
    let message;
    if (!friendRequestField.value) {
        showToast("You have to fill in the user ID to send the request.")
        return;
    }

    try {
        //building parametes to be sent
        const params = new URLSearchParams ({
            requestedId : friendRequestField.value,
            message : messageField.value
        });
        console.log(params);
        

        const response = await fetch(`http://localhost:8080/send-friend-request?${params}`, {
            method: "POST",
            headers: {
                "Authorization" : getToken(),
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });

        if (!response.ok) {
            message = await response.text();
            throw new Error(message);
        }

        message = await response.text();
        showToast(message);
    } catch (error) {
        showToast(error.message);
        console.error(message);
    }
}

async function showOutgoingRequest() {
    flexibleSection.innerHTML = "";
    
    let message;
    
    try {
        //fetch request
        const response = await fetch(`http://localhost:8080/get-friend-requests-sent`, {
            method: "GET",
            headers: {
                "Authorization": getToken(),
                "Content-type" : "application/json",
            },
        });

        if (!response.ok) {
            message = await response.text();
            throw new Error(message);
        }

        const friendRequestList = await response.json();
        if (friendRequestList.length === 0) {
            console.log("empty list");
            currentFriendRequests.textContent = "No friend request sent.";
            flexibleSection.append(currentFriendRequests);
        } else {

            flexibleSection.append(outGoingFriendRequestTitle);
            //TODO: SETUP DISPLAY OF FRIEND REQUESTS
            for (let friendRequ of friendRequestList){
                const friendRequest = new FriendRequest (
                    friendRequ.id,
                    friendRequ.requesterID,
                    friendRequ.requesterUsername,
                    friendRequ.requestedID,
                    friendRequ.requestedUsername,
                    friendRequ.status,
                    friendRequ.message,
                    friendRequ.created,
                    friendRequ.updated,
                )
                
                flexibleSection.append(friendRequest.requestElementsForRequester());
            }
        }
        
    } catch (error) {
        console.log(error.message)
    }   
}

async function getUserAndShowFriends() {
    let message;
    try {
        const response = await fetch("http://localhost:8080/user-info", {
            method: "GET",
            headers: {
                "Authorization" : getToken(),
                "content-type": "application/json",
            }
        })

        if(!response.ok) {
            message = await response.text();
            throw new Error(message);
        }

        const userResponse = await response.json();
        const user = new User(
        userResponse.id, 
        userResponse.username, 
        null, 
        false, 
        userResponse.friends, 
        userResponse.conversations, 
        userResponse.likes,
        userResponse.privateMode,
        );
        showFriends(user);
    } catch(error) {
        showToast(error.message);
    }
}