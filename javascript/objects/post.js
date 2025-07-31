export class Post {
    constructor (id, user, date, title, content, isPrivate, likes, comments) {
        this.id = id;
        this.user = user;
        this.date = date;
        this.title = title;
        this.content = content;
        this.isPrivate = isPrivate;
        this.likes = likes;
        this.comments = comments;
    }

    publishPostCard() {
        const postCard = document.createElement("article");
        const postUserCard = document.createElement("div");
        const userImg =document.createElement("img");
        const usernamePosted = document.createElement("h3");
        const postDate = document.createElement("i");
        const postTitle = document.createElement("h2");
        const postContent = document.createElement("p")
        const likeCommentTab = document.createElement("div");
        const likeDiv = document.createElement("div");
        const commentDiv = document.createElement("div");
        const likeSymbol = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const commentSymbol = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        const likeCounter = document.createElement("p");
        const commentCounter = document.createElement("p");

        postCard.classList = "post-card hiddenPostCard";
        postUserCard.classList = "post-user-card";
        postTitle.classList = "post-title";
        postContent.classList = "post-content";
        likeCommentTab.classList = "post-like-and-comment-tab";
        likeDiv.classList = "like-or-comment-div";
        commentDiv.classList = "like-or-comment-div";

        postCard.id = this.id;

        postUserCard.append(userImg, usernamePosted, postDate);
        likeDiv.append(likeSymbol, likeCounter);
        commentDiv.append(commentSymbol, commentCounter);
        likeCommentTab.append(likeDiv, commentDiv);
        postCard.append(postUserCard, postTitle, postContent, likeCommentTab);

        likeSymbol.innerHTML = `
            <g>
                <path fill="#2274A5" d="M462.8,181.564c-12.3-10.5-27.7-16.2-43.3-16.2h-15.8h-56.9h-32.4v-75.9c0-31.9-9.3-54.9-27.7-68.4
                c-29.1-21.4-69.2-9.2-70.9-8.6c-5,1.6-8.4,6.2-8.4,11.4v84.9c0,27.7-13.2,51.2-39.3,69.9c-19.5,14-39.4,20.1-41.5,20.8l-2.9,0.7
                c-4.3-7.3-12.2-12.2-21.3-12.2H24.7c-13.6,0-24.7,11.1-24.7,24.7v228.4c0,13.6,11.1,24.7,24.7,24.7h77.9c7.6,0,14.5-3.5,19-8.9
                c12.5,13.3,30.2,21.6,49.4,21.6h65.9h6.8h135.1c45.9,0,75.2-24,80.4-66l26.9-166.9C489.8,221.564,480.9,196.964,462.8,181.564z
                M103.2,441.064c0,0.4-0.3,0.7-0.7,0.7H24.7c-0.4,0-0.7-0.3-0.7-0.7v-228.4c0-0.4,0.3-0.7,0.7-0.7h77.9c0.4,0,0.7,0.3,0.7,0.7
                v228.4H103.2z M462.2,241.764l-26.8,167.2c0,0.1,0,0.3-0.1,0.5c-3.7,29.9-22.7,45.1-56.6,45.1H243.6h-6.8h-65.9
                c-21.3,0-39.8-15.9-43.1-36.9c-0.1-0.7-0.3-1.4-0.5-2.1v-191.6l5.2-1.2c0.2,0,0.3-0.1,0.5-0.1c1-0.3,24.7-7,48.6-24
                c32.7-23.2,49.9-54.3,49.9-89.9v-75.3c10.4-1.7,28.2-2.6,41.1,7c11.8,8.7,17.8,25.2,17.8,49v87.8c0,6.6,5.4,12,12,12h44.4h56.9
                h15.8c9.9,0,19.8,3.7,27.7,10.5C459,209.864,464.8,225.964,462.2,241.764z" />
            </g>
        `;
        commentSymbol.innerHTML = `
            <g>
                <path fill="#2274A5" d="M60,0H4C1.789,0,0,1.789,0,4v40c0,2.211,1.789,4,4,4h8v15c0,0.404,0.243,0.77,0.617,0.924
                C12.741,63.976,12.871,64,13,64c0.26,0,0.516-0.102,0.707-0.293L29.414,48H60c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z M15,14
                h16c0.553,0,1,0.447,1,1s-0.447,1-1,1H15c-0.553,0-1-0.447-1-1S14.447,14,15,14z M45,34H15c-0.553,0-1-0.447-1-1s0.447-1,1-1h30
                c0.553,0,1,0.447,1,1S45.553,34,45,34z M14,27c0-0.553,0.447-1,1-1h24c0.553,0,1,0.447,1,1s-0.447,1-1,1H15
                C14.447,28,14,27.553,14,27z M49,22H15c-0.553,0-1-0.447-1-1s0.447-1,1-1h34c0.553,0,1,0.447,1,1S49.553,22,49,22z"/>
            </g>
        `;
        likeSymbol.setAttribute("viewBox", "0 0 512 512");
        commentSymbol.setAttribute("viewBox", "0 0 64 64");

        userImg.src = "../logos/connecthublogoINVERTEDFOCUSED.png"
        usernamePosted.textContent = this.user + " posted"
        postDate.textContent = this.date;

        postTitle.textContent = this.title;
        postContent.textContent = this.content;

        likeCounter.textContent = this.likes.length;
        commentCounter.textContent = this.comments.length;

        return postCard;
    }
}
