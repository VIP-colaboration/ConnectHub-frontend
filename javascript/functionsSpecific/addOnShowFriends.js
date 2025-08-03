import { getToken } from "../objects/token.js";
import { fetchFriendPicture } from "./getUsersInfo.js";
import { showToast } from "../pages/main.js";

const flexibleSection = document.getElementById("flexibleSection");
const friendsContainer = document.createElement("section");
const friendsContainerTitle = document.createElement("h1");

friendsContainer.classList = "friends-container";
friendsContainerTitle.classList = "sectionTitle";
friendsContainerTitle.textContent = "Friends";

//displays the friends user, empties the friend container to avoid multiplication of data on the screen
export function showFriends (user) {
  flexibleSection.innerHTML = "";
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

    
    flexibleSection.appendChild(friendsContainer);
}

//TODO will allow to see friend's page
export async function goToFriend(friendID) {
  //TODO write function
  showToast(friendID);
}