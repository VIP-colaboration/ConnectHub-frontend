
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
    const dots = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    logo.src = "../logos/connectihubsimplewithpath.png"
    linkHome.href = "index.html";
    bulletinBoard.innerHTML = '<a href="bulletin-board.htlm">Bulletin Board</a>';
    friends.innerHTML = '<a href="friends.htlm">Friends</a>';
    messages.innerHTML = '<a href="messages.htlm">Bulletin Board</a>';
    account.innerHTML = '<a href="account.htlm">Account</a>';
    hamburger.innerHTML = `
                <svg
          width="3rem"
          height="3rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
            fill="#FF9F1C"
          />
        </svg>
                `;
    dots.innerHTML = `
            <svg viewBox="60 176 568 50" xmlns="http://www.w3.org/2000/svg">
                <path
                d="
                    M69.73221,218.96185
                    m-8.20493,0
                    a8.20493,8.20493 0 1,0 16.40986,0
                    a8.20493,8.20493 0 1,0 -16.40986,0
                    Z

                    M198.70346,180.24483
                    m-6.4101,0
                    a6.4101,6.4101 0 1,0 12.8202,0
                    a6.4101,6.4101 0 1,0 -12.8202,0
                    Z

                    M271.77862,223.06431
                    m-6.1537,0
                    a6.1537,6.1537 0 1,0 12.3074,0
                    a6.1537,6.1537 0 1,0 -12.3074,0
                    Z

                    M292.80375,184.6037
                    m-11.28178,0
                    a11.28178,11.28178 0 1,0 22.56356,0
                    a11.28178,11.28178 0 1,0 -22.56356,0
                    Z

                    M336.90525,208.70568
                    m-3.58966,0
                    a3.58966,3.58966 0 1,0 7.17932,0
                    a3.58966,3.58966 0 1,0 -7.17932,0
                    Z

                    M407.67278,189.21898
                    m-4.10247,0
                    a4.10247,4.10247 0 1,0 8.20494,0
                    a4.10247,4.10247 0 1,0 -8.20494,0
                    Z

                    M471.26099,218.44904
                    m-4.61527,0
                    a4.61527,4.61527 0 1,0 9.23054,0
                    a4.61527,4.61527 0 1,0 -9.23054,0
                    Z

                    M517.41372,196.9111
                    m-14.35863,0
                    a14.35863,14.35863 0 1,0 28.71726,0
                    a14.35863,14.35863 0 1,0 -28.71726,0
                    Z

                    M586.89922,198.70593
                    m-5.38449,0
                    a5.38449,5.38449 0 1,0 10.76898,0
                    a5.38449,5.38449 0 1,0 -10.76898,0
                    Z

                    M617.66771,185.37291
                    m-3.84606,0
                    a3.84606,3.84606 0 1,0 7.69212,0
                    a3.84606,3.84606 0 1,0 -7.69212,0
                    Z

                    M70.75783,218.96185 L197.93425,179.98843
                    M270.753,224.08993 L197.42144,180.50124
                    M198.95986,181.01404 L290.75252,184.6037
                    M291.77814,185.11651 L272.29143,225.62835
                    M295.8806,184.09089 L336.39245,208.19288
                    M340.49491,207.68007 L405.62155,190.24459
                    M408.69839,189.73178 L296.39341,184.09089
                    M404.08312,187.16774 L469.72256,218.44904
                    M469.20976,219.98746 L515.8753,198.44952
                    M513.31126,196.39829 L408.18559,188.70617
                    M519.46495,196.39829 L587.66844,198.44952
                    M588.69405,197.42391 L617.92412,184.6037
                    M620.48816,185.62932 L523.56742,191.78302
                "
                fill="#FF9F1C"
                stroke="#FF9F1C"
                fill-rule="evenodd"
                clip-rule="evenodd"
                />
            </svg>
            `;


    navBar.className = "hidden";
    dots.classList = "dots";
    hamburger.id = "hamburgerMenu";

    linkHome.append(logo);
    navBar.append(bulletinBoard, friends, messages, account)
    navDiv.append(hamburger, navBar)
    header.append(linkHome, dots, navDiv);
    document.body.appendChild(header);

    hamburger.addEventListener("click", () => {
        navBar.classList.toggle("hidden")
    })
}
