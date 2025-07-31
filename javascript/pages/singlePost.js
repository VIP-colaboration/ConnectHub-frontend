import { getToken } from "../objects/token.js";
import { showToast } from "./main.js";
import { Post } from "../objects/post.js";
//import { getSinglePost } from "../functionsSpecific/addOnPost.js";

const urlParam = new URLSearchParams(window.location.search);
const postId = urlParam.get("postId");
const postContainer = document.getElementById("singlePost");

displaySinglePost(postId);


async function displaySinglePost(postId) {
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

        console.log(JSON.stringify(post));
        

        const postCard = post.publishPostCard();

        postContainer.appendChild(postCard);
    } catch (error) {
        console.error("getSinglePost: " + error.message);
    }
}