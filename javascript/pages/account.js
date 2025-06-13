import { setToken, removeToken, getToken, saveProfilePicture, getProfilePicture, removeProfilePicture } from "../objects/token.js";
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
const userProfilePictureInput = document.getElementById("userProfilePictureInput");
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

userProfilePictureInput.addEventListener("change", (e) => {
  handleFile(e);
})

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
    privateModeSwitch();
});




async function substantiateUser() {
    try {
        const user = await fetchUser()

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
    checkIfProfilePicutre();
    userName.textContent = user.name;
    userEmail.textContent = "undefined";
    friendCounter.textContent = ifListNullThenZero(user.friends);
    conversationCounter.textContent = ifListNullThenZero(user.conversations);
    postCounter.textContent = 0; //TODO fix later
    commentCounter.textContent = 0; //TODO fix later
    likedCounter.textContent = ifListNullThenZero(user.likes);
    visibilityMode.checked = user.privateMode;
}

async function checkIfProfilePicutre() {
  const localStorageImg = getProfilePicture();
  if (localStorageImg) {
    console.log("found picture in local storage");
    
    const profileImage = getProfilePicture();
    userPicture.style.backgroundImage = `url('${profileImage}')`;
    return;
  }

  console.log("did not find picture in local storage");

  try {
    const response = await fetch("http://localhost:8080/get-profile-picture", {
      method: "GET",
      headers:{
        "Authorization": getToken(),
      }
    })

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }
    
    const binaryImage = await response.blob();


    //this sets everything for when the image is ready
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const profileImage = fileReader.result;

      saveProfilePicture(profileImage);

      userPicture.style.backgroundImage = `url('${profileImage}')`;
    };

    //this implements the 'onloadend' above
    fileReader.readAsDataURL(binaryImage);

  } catch(error) {
    showToast(error.message);
    console.log(error.message);
    userPicture.style.backgroundImage = 'url("../pictures/std-profile-picture.png")';
  }
  
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

async function privateModeSwitch() {
  let message;
  try {
    let response = await fetch("http://localhost:8080/private-mode-switch", {
      method : "PUT",
      headers: {
        "Authorization" : getToken()
      }
    });

    if (!response.ok) {
      message = await response.text();
      throw new Error (message);
    }
    message = await response.text();
    fetchUser();
    showToast(message);
  } catch(error) {
    showToast(error.message);
  }
}

function ifListNullThenZero(itemList) {
  if (itemList === null || itemList === undefined) {
      return 0;
  }
  return itemList.length;
}

function handleFile(event) {
  console.log("handle profile picture");

  const profilePicture = event.target.files[0];

  if (!profilePicture) {
    console.log("fail handleFile");
    
    return;
  }

  const fileReader = new FileReader();

  fileReader.onload = function(e) {
    console.log("handleFile: fileReader function");
    
    const pictureURL = e.target.result;

    localStorage.setItem("profilePicture", pictureURL);

    userPicture.style.backgroundImage = `url('${pictureURL}')`;
  }

  fileReader.readAsDataURL(profilePicture);

  uploadProfilePicture(profilePicture);
}

async function uploadProfilePicture(image) {
  console.log("uploadProfilePicture");
  
  const formData = new FormData();
  formData.append("file", image);

  try {
    const response = await fetch("http://localhost:8080/upload-profile-picture", {
      method: "POST",
      headers: {
        "Authorization" : getToken(),
      },
      body: formData,
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    showToast("Profile picture uploaded.");

    //TODO update picture?

  } catch(error) {
    showToast(error.message);
  }
}

