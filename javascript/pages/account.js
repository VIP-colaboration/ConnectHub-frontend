import { setToken, removeToken } from "../objects/token.js";
import { showToast } from "../pages/main.js";

//FOR USER INFO
const userPicture = document.getElementById("userPicture");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const visibilityMode = document.getElementById("visibilityMode");
const friendsCtrl = document.getElementById("friendsCtrl");
const friendCounter = document.getElementById("friendCounter");
const conversationsCtrl = document.getElementById("conversationsCtrl");
const conversationCounter = document.getElementById("conversationCounter");
const postsCtrl = document.getElementById("postsCtrl");
const postCounter = document.getElementById("postCounter");
const commentsCtrl = document.getElementById("commentsCtrl");
const commentCounter = document.getElementById("commentCounter");
const likedCtrl = document.getElementById("likedCtrl");
const likedCounter = document.getElementById("likeCounter");

userEmail.addEventListener("mouseenter", () => {
    //test code
    showToast("click to change your email address");
})

visibilityMode.addEventListener("click", () => {
    //test code
    if (visibilityMode.checked) {
        console.log("invisible");
    }
    if (!visibilityMode.checked) {
        console.log("visible");
    }
});