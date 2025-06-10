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

//ITEMS TO SHOW
const itemsToShow = document.getElementById("itemsToShow");
const friendsContainer = document.createElement("section");


friendsContainer.classList = "friends-container";

userEmail.addEventListener("mouseenter", () => {
    //test code
    showToast("click to change your email address");
});

visibilityMode.addEventListener("click", () => {
    //test code
    if (visibilityMode.checked) {
        console.log("invisible");
    }
    if (!visibilityMode.checked) {
        console.log("visible");
    }
});

const placeholderFriends = [
  { name: "Jen", avatar: "https://xsgames.co/randomusers/avatar.php?g=female" },
  { name: "Super Cat", avatar: "https://xsgames.co/randomusers/avatar.php?g=male" },
  { name: "Marie Taylor Greene", avatar: "https://xsgames.co/randomusers/avatar.php?g=female" },
  { name: "Bob", avatar: "https://xsgames.co/randomusers/avatar.php?g=male" },
  { name: "Osama", avatar: "https://xsgames.co/randomusers/avatar.php?g=male" }
];

showFriends();

function showFriends () {
    
    

    for (let friend of placeholderFriends) {
        const singleFriend = document.createElement("div");
        const friendAvatar = document.createElement("img");
        const friendName = document.createElement("h2");

        singleFriend.classList = "user-logo-and-name";
        singleFriend.append(friendAvatar, friendName);

        friendAvatar.src = friend.avatar;
        friendName.textContent = friend.name;

        friendsContainer.appendChild(singleFriend);
    }

    itemsToShow.innerHTML = "";
    itemsToShow.appendChild(friendsContainer);
}