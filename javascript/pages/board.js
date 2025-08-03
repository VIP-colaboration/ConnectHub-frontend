import { Post } from "../objects/post.js";
import { getToken, getUserID } from "../objects/token.js";
import { showToast } from "./main.js";
import { getPostCardsFromUser } from "../functionsSpecific/addOnPost.js";
import { formatDate } from "../functionsSpecific/formatDate.js";

const openPostFormBtn = document.getElementById("openPostFormBtn");
const postForm = document.getElementById("postForm");
const postTitleInput = document.getElementById("postTitleInput")
const postTextInput = document.getElementById("postText");
const postPictureInput = document.getElementById("postPictureBrowse");
const postBtn = document.getElementById("postBtn");
const cancelPostBtn = document.getElementById("cancelPostBtn");
const postList = document.getElementById("posts");

getPostCardsFromUser();

const postCards = document.querySelectorAll("post-card");

openPostFormBtn.addEventListener("click", () => {
    postForm.classList.toggle("hiddenForm");
});

postBtn.addEventListener("click", () => {
    savePost();
    if (!postPictureInput.value) {
        console.log("false");
    } else {
        console.log(postPictureInput.value);
        
    }
});

cancelPostBtn.addEventListener("click", emptyAndClosePostForm);

/**
 * empties post form and changes style to hiddenForm
 */
function emptyAndClosePostForm() {
    postTitleInput.value = "";
    postTextInput.value = "";
    postPictureInput.value = "";
    postForm.classList.toggle("hiddenForm");
}

/**
 * creates a post based on text and privacy setting then saves the post on the server and
 * if there is a picture it will be save on the server
 * throws error if any step fails
 */
async function savePost() {
    const postID = await savePostRequest();
    if (!postID) {
        showToast("Error while saving post.")
        return;
    }
    console.log(postID);
    
    if (hasPicture()) {
        savePostPicture(postID);
    } else {
        window.location.reload();
    }
    
    
}

/**
 * creates and send the post request to be saved
 * @returns post UUID to be used for eventually saving a picture
 */
async function savePostRequest (){
    const postRequest = {
            userId : getUserID(),
            post : {
                title: postTitleInput.value,
                content: postTextInput.value,
                isPrivate: false
            },
        };

    try {
        const response = await fetch("http://localhost:8080/add-post", {
            method: "POST",
            headers: {
                "Authorization" : getToken(),
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(postRequest),
        });

        if(!response.ok) {
            const message = await response.text();
            throw new Error(message);
        }

        return await response.json();
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

function hasPicture() {
    if (!postPictureInput.value) {
        console.log("false");
        
        return false;
    }
    console.log("true");
    
    
    return true;
}

/**
 * saves post background image to server through API-endpoint
 * @param {*} postId 
 */
async function savePostPicture(postId) {
    const postPicture = postPictureInput.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(postPicture);

    const formData = new FormData();
    formData.append("file", postPicture);
    
    try {
        const response = await fetch(`http://localhost:8080/upload-post-picture/${postId}`, {
            method: "POST",
            headers: {
                "Authorization" : getToken(),
            },
            body: formData,
        });

        if (!response.ok) {
            const message = await response.text();
            throw new Error(message)
        }

        showToast("Post image saved.");
        window.location.reload();

    } catch (error) {
        showToast(error.message);
        console.log(error.message);
        
    }
}

