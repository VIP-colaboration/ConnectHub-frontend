import { getToken } from "../objects/token.js";

const flexibleSection = document.getElementById("flexibleSection");
const friendsContainer = document.createElement("section");
const friendsContainerTitle = document.createElement("h1");

friendsContainer.classList = "friends-container";
friendsContainerTitle.classList = "sectionTitle";
friendsContainerTitle.textContent = "Friends";

//displays the friends user, empties the friend container to avoid multiplication of data on the screen
export function showFriends (user) {
  friendsContainer.innerHTML = ""; //to avoid multiplication
    friendsContainer.appendChild(friendsContainerTitle)
    for (let friend of user.friends) {
        const singleFriend = document.createElement("div");
        const friendAvatar = document.createElement("img");
        const friendName = document.createElement("h2");

        singleFriend.classList = "friendCard";

        singleFriend.addEventListener("click", () => goToFriend(friend.id));

        singleFriend.append(friendAvatar, friendName);

        fetchFriendPicture(friendAvatar, friend.id);
        friendName.textContent = friend.username;

        friendsContainer.appendChild(singleFriend);
    }

    flexibleSection.innerHTML = "";
    flexibleSection.appendChild(friendsContainer);
}

//gets the friend's picture based on the friend ID
async function fetchFriendPicture (friendAvatar, friendID) {  
    try {
        const response = await fetch(`http://localhost:8080/fetch-friend-profile-picture/${friendID}`, {
        method: "GET",
        headers:{
        "Authorization": getToken(),
      }      
    })

    if (response.status === 404) {
      friendAvatar.src = '../pictures/std-profile-picture.png';
      return;
    }

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const binaryImage = await response.blob();

      const imageUrl = URL.createObjectURL(binaryImage);
      friendAvatar.src = imageUrl;

      friendAvatar.onload = () => URL.revokeObjectURL(imageUrl);
    
  } catch(error) {
     friendAvatar.src = '../pictures/std-profile-picture.png';
  }
}

//will allow to see friend's page
async function goToFriend(friendID) {
  //TODO write function
  showToast(friendID);
}