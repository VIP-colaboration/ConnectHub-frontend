import { getToken } from "../objects/token.js";

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
      return avatar;
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
