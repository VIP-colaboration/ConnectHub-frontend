import { getToken } from "../objects/token.js";

/**
 * gets the friend's picture based on the friend ID works even if friend actually is user (handled on backend)
 * @param {*} avatar to which the image will be added
 * @param {*} friendID to look up image
 */
export async function fetchFriendPicture (avatar, friendID) {  
    try {
        const response = await fetch(`http://localhost:8080/fetch-friend-profile-picture/${friendID}`, {
        method: "GET",
        headers:{
        "Authorization": getToken(),
      }      
    })

    if (response.status === 404) {
      avatar.src = '../pictures/std-profile-picture.png';
      return;
    }

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const binaryImage = await response.blob();

      const imageUrl = URL.createObjectURL(binaryImage);
      avatar.src = imageUrl;

      avatar.onload = () => URL.revokeObjectURL(imageUrl);
    
  } catch(error) {
    console.error("Fetch user picture: " + error.message);
     avatar.src = '../pictures/std-profile-picture.png';
  }
}

/**
 * returns the username of anyusers based on their userID
 * @param {*} userID 
 * @returns username in string form
 */
export async function retrieveUserName(userID) {
    try {
        const response = await  fetch(`http://localhost:8080/get-user/${userID}`, {
            method: "GET",
            headers: {
                "Authorization" : getToken(),
                "Content-type" : "Application/json"
            },
        });

        if (!response.ok) {
            const message = await response.text();
            throw new Error(message);
        }

        const userResponse = await response.json();
        const username = userResponse.username;
        

        return username;

    } catch (error) {
        console.error(error.message);
        return "Error fetching name";
    }
}
