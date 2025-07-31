import { Post } from "../objects/post.js";
import { getToken } from "../objects/token.js";
import { formatDate } from "./formatDate.js";




export async function getPostCardsFromUser() {
    const postList = document.getElementById("posts");
    try {
        const response = await fetch("http://localhost:8080/get-posts-from-user", {
            method: "GET",
            headers: {
                "Authorization" : getToken(),
            }
        });

        if (!response.ok) {
            const message = await response.text();
            throw new Error(message)
        }

        const postResponses = await response.json();

        const posts = [];

        for (let postResponse of postResponses) {
            const post = new Post(
                postResponse.id,
                postResponse.userId,
                postResponse.date,
                postResponse.title,
                postResponse.content,
                postResponse.private,
                postResponse.likes,
                postResponse.comments,
            );

            posts.push(post);
        }
        
        for (let post of posts) {
            postList.append(post.publishPostCard());
        }

        const observer = new IntersectionObserver((postCards) =>  {
        postCards.forEach((postCard) => {
            if (postCard.isIntersecting) {
                postCard.target.classList.add("showPostCard");
            }
        })
    });

    const hiddenPostCards = document.querySelectorAll(".hiddenPostCard");
    hiddenPostCards.forEach((postCard) => observer.observe(postCard));

    } catch (error) {
        console.error(error.message);
    }
}
