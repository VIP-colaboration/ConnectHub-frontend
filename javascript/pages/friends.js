import { setToken, removeToken, getToken, saveProfilePicture, getProfilePicture, removeProfilePicture, getUserID, getUsername } from "../objects/token.js";
import { showToast } from "./main.js";
import { User } from "../objects/user.js";

//FIXED ELEMENTS (always diplayed/included)
const userImage = document.getElementById("userImage");
const username = document.getElementById("username");
const userID =document.getElementById("userID");
const flexibleSection = document.getElementById("flexibleSection");

//FOR FLEXIBLE SECTION
const currentFriendRequests = document.createElement("h2");

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


    console.log(getUsername());
    console.log(getUserID());
    
    

    username.textContent= getUsername();
    userID.textContent = getUserID();
}

async function checkForFriendRequest() {
    let message;
    try {
        const response = await fetch("http://localhost:8080/get-pending-friend-requests", {
            method: "GET",
            headers: {
                "Authorization": getToken(),
                "Content-type" : "application/json",
            },
        });

        if (!response.ok) {
            console.log("error at fetching friend requests")
            message = await response.text();
            throw new Error(message);
        }

        const friendRequestList = await response.json();
        if (friendRequestList.length === 0) {
            console.log("empty list");
            currentFriendRequests.textContent = "No friend request received";
            flexibleSection.append(currentFriendRequests);
        } else {
            //TODO: SETUP DISPLAY OF FRIEND REQUESTS
            console.log(friendRequestList);
        }
        
    } catch (error) {
        console.log(error.message)
    }
}