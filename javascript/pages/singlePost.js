import { getToken } from "../objects/token.js";
import { showToast } from "./main.js";
import { Post } from "../objects/post.js";
//import { getSinglePost } from "../functionsSpecific/addOnPost.js";

const urlParam = new URLSearchParams(window.location.search);
const postId = urlParam.get("postId");
const postContainer = document.getElementById("singlePost");

console.log("Type of postId:", typeof postId);
console.log("postId value:", postId);
console.log("Is postId a Promise?", postId instanceof Promise);

displaySinglePost(postId);


function displaySinglePost(postId) {

    console.log("In displaySinglePost - Type:", typeof postId);
    console.log("In displaySinglePost - Value:", postId);
    console.log("In displaySinglePost - Is Promise?", postId instanceof Promise);
    console.log(postId);

    
    getSinglePost(postContainer, postId);

    
}

async function getSinglePost(parentNode, postId) {
    console.log(typeof(postId));

    try {
        const response = await fetch(`http://localhost:8080/get-post/${postId}`, {
            method: "GET",
            headers: {
                "Authorization": getToken(),
            }
        });

        if (!response.ok) {
            const message = await response.text();
            throw new Error(message);
        }

        const data = await response.json();

        const post = new Post (
            data.id,
            data.userId,
            data.date,
            data.title,
            data.content,
            data.isPrivate,
            data.likes,
            data.comments
        );

        const postCard = post.publishPostCard();

        parentNode.appendChild(postCard);
    } catch (error) {
        console.error("getSinglePost: " + error.message);
    }
}
