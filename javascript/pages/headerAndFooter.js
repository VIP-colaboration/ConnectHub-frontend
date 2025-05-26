
headerMaker();

function headerMaker () {
    const header = document.createElement("header");
    const linkHome = document.createElement("a");
    const logo = document.createElement("img");
    const navDiv = document.createElement("div");
    const navBar = document.createElement("ul")
    const hamburger = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    const bulletinBoard = document.createElement("li");
    const friends = document.createElement("li");
    const messages = document.createElement("li");
    const account = document.createElement("li");

    logo.src = "../logos/connectihubsimplewithpath.png"
    linkHome.href = "index.html";
    bulletinBoard.innerHTML = '<li><a href="bulletin-board.htlm">Bulletin Board</a>';
    friends.innerHTML = '<a href="friends.htlm">Friends</a>';
    messages.innerHTML = '<a href="messages.htlm">Bulletin Board</a>';
    account.innerHTML = '<a href="account.htlm">Account</a>';
    hamburger.innerHTML = `
                <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
            fill="#FF9F1C"
          />
                `;

    navBar.className = "hidden";

    linkHome.append(logo);
    navBar.append(bulletinBoard, friends, messages, account)
    navDiv.append(hamburger, navBar)
    header.append(linkHome, navDiv);
    document.body.appendChild(header);

    hamburger.addEventListener("click", () => {
        navBar.classList.toggle("hidden")
    })


}
