import { setToken, removeToken, getToken, saveProfilePicture, getProfilePicture, removeProfilePicture, getUserID, getUsername } from "../objects/token.js";
import { showToast } from "./main.js";
import { User } from "../objects/user.js";

const userImage = document.getElementById("userImage");
const username = document.getElementById("username");
const userID =document.getElementById("userID");

setUpUserDetail();

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