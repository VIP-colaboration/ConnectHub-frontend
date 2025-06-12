import { setToken, removeToken, getToken } from "../objects/token.js";
import { showToast } from "../pages/main.js";
import { User } from "../objects/user.js";

//test data to be removed
const placeholderFriends = [
  { name: "Jen", avatar: "https://xsgames.co/randomusers/avatar.php?g=female" },
  { name: "Super Cat", avatar: "https://xsgames.co/randomusers/avatar.php?g=male" },
  { name: "Marie Taylor Greene", avatar: "https://xsgames.co/randomusers/avatar.php?g=female" },
  { name: "Bob", avatar: "https://xsgames.co/randomusers/avatar.php?g=male" },
  { name: "Osama", avatar: "https://xsgames.co/randomusers/avatar.php?g=male" }
];

//FOR USER INFO
const userPicture = document.getElementById("userPicture");
const userName = document.getElementById("username");
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

userPicture.addEventListener("mouseenter", () => {
    //test code
    showToast("click to change your profile picture.");
});

userPicture.addEventListener("click", handleFile)

userEmail.addEventListener("mouseenter", () => {
    //test code
    showToast("click to change your email address");
});

visibilityMode.addEventListener("mouseenter", () => {
    showToast("Change your visibility setting.")
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




async function substantiateUser() {
    try {
        const user = await fetchUser()

        console.log("after fetch" + JSON.stringify(user));

        displayUserinfo(user);
        showFriends();

    } catch(error) {
        console.error(error.message);
    }
}

substantiateUser();



async function fetchUser() {
  let message;
  try {
    const response = await fetch("http://localhost:8080/user-info", {
      method: "GET",
      headers: {
        "Authorization": getToken(),
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      console.log("response not ok on user-info");
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

    return user;
  } catch (error) {
    console.error("Error in fetchUser:", error);
    throw error; // to be called in substantiateUser
  }
}

function displayUserinfo(user) {
    userName.textContent = user.name;
    userEmail.textContent = "undefined";
    friendCounter.textContent = ifListNullThenZero(user.friends);
    conversationCounter.textContent = ifListNullThenZero(user.conversations);
    postCounter.textContent = 0; //TODO fix later
    commentCounter.textContent = 0; //TODO fix later
    likedCounter.textContent = ifListNullThenZero(user.likes);
    visibilityMode.checked = user.privateMode;
}

function showFriends (/*inser user */) {
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

function ifListNullThenZero(itemList) {
    if (itemList === null || itemList === undefined) {
        return 0;
    }
    return itemList.length;
}

function handleFile(event) {
    console.log("handle file");
    // Handle the selected file(s) here
    const selectedFiles = event.target.files;
    console.log(selectedFiles);
}