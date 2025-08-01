import { getToken, getUserID } from "../objects/token.js";
import { showToast } from "./main.js";
import { Post } from "../objects/post.js";
import { Comment } from "../objects/comment.js";

const urlParam = new URLSearchParams(window.location.search);
const postId = urlParam.get("postId");
const postContainer = document.getElementById("singlePost");

//PLACHOLDER COMMENTS
const placeholderComments = [
  new Comment(1, '2025-08-01T10:30:00Z', 'user_01', 'Alice', 'This space program is truly inspiring!', ['71520a35-36b9-4205-b7e1-2ad5d6865301', 'd78333d1-3242-4c99-a928-89785ce7781e']),
  new Comment(2, '2025-08-01T10:45:00Z', 'user_02', 'Bob', 'I hope they invest more in sustainability.', ['d7d77240-738e-4b11-937a-16c57f6ba9bb']),
  new Comment(3, '2025-08-01T11:00:00Z', 'user_03', 'Charlie', 'Satellites have changed the world!', ['0c513aca-5871-4435-a557-edfa798e1b62', 'b6ab04b0-8f47-47e2-b56f-7737c41781dc']),
  new Comment(4, '2025-08-01T11:15:00Z', 'user_04', 'Diana', 'The tech developed here helps us daily.', ['4ede8cf4-09ba-49cf-9413-5d70afc1683a', 'bbe5b4de-544e-4875-ab96-cc1938444e4b']),
  new Comment(5, '2025-08-01T11:30:00Z', 'user_05', 'Ethan', 'Space exploration should be global.', ['08c0d5df-8c6b-4e8f-8d3d-3c942e2f4968']),
  new Comment(6, '2025-08-01T11:45:00Z', 'user_06', 'Fatima', 'I dream of being an astronaut someday!', ['d78333d1-3242-4c99-a928-89785ce7781e', 'd7d77240-738e-4b11-937a-16c57f6ba9bb']),
  new Comment(7, '2025-08-01T12:00:00Z', 'user_07', 'George', 'Let’s push the boundaries of science!', ['b6ab04b0-8f47-47e2-b56f-7737c41781dc']),
  new Comment(8, '2025-08-01T12:15:00Z', 'user_08', 'Hannah', 'What’s the next mission planned?', ['0c513aca-5871-4435-a557-edfa798e1b62', '08c0d5df-8c6b-4e8f-8d3d-3c942e2f4968'])
];


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

        displayDeleteBtn(post);
        displayCommentSection(post);

    } catch (error) {
        console.error("getSinglePost: " + error.message);
    }
}

function displayDeleteBtn(post) {
    if(post.userId === getUserID()) {
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "cautionBtn";
        deleteBtn.textContent = "Delete Post";
        postContainer.append(deleteBtn);
    }
}

function displayCommentSection(post) {
    const commentSection = document.createElement("section");
    const commentSectionTitle = document.createElement("h2");

    commentSection.classList = "comment-section";
    commentSectionTitle.textContent = "Comments"
    //TODO add 'add comment form'
    
    commentSection.appendChild(commentSectionTitle);

    postContainer.appendChild(commentSection);

    fetchComments(commentSection)
}

async function fetchComments(parentNode) {

    for (let comment of placeholderComments) {
        parentNode.appendChild(comment.publishComment());
    }
    
}