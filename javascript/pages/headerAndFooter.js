import { removeProfilePicture, removeToken, removeUserID, removeUsername } from "../objects/token.js";

headerMaker();
footerMaker();

/**
 * self-explanatory
 */
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
    const logoutButton = document.createElement("button");
  
    logo.src = "../logos/connecthubtext.png"
    linkHome.href = "index.html";
    bulletinBoard.innerHTML = '<a href="board.html">Board</a>';
    friends.innerHTML = '<a href="friends.html">Friends</a>';
    messages.innerHTML = '<a href="conversations.html">Conversations</a>';
    account.innerHTML = '<a href="account.html">Account</a>';
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
            fill="#F1C40F"
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
                fill="#F1C40F"
                stroke="#F1C40F"
                fill-rule="evenodd"
                clip-rule="evenodd"
                />
            </svg>
      `;

    logoutButton.textContent = "Logout";
    

    logoutButton.addEventListener("click", logout);

    logoutButton.classList = "secondaryBtn";
    navBar.className = "hidden";
    dots.classList = "dots";
    hamburger.id = "hamburgerMenu";
    logoutButton.style = "height: 3rem; padding:0; font-size: large";

    linkHome.append(logo);
    navBar.append(bulletinBoard, friends, messages, account, logoutButton);
    navDiv.append(hamburger, navBar)
    header.append(linkHome, dots, navDiv);
    document.body.prepend(header);

    if (window.location.href.includes("board.html")) {      
      navDiv.append(addSearchInput());
    }

    hamburger.addEventListener("click", () => {
        navBar.classList.toggle("hidden")
    })
}

/**
 * self-explanatory
 */
function footerMaker() {
  const footer = document.createElement("footer");
  const copyright = document.createElement("p");
  const infoLink = document.createElement("a");
  const infoSymbol = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  copyright.textContent = "© Connect Hub 2025";
  infoLink.href = "info.html";
  infoSymbol.innerHTML = `
    <svg version="1.1" id="infoSymbol" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 23.625 23.625" xml:space="preserve">
    <g>
      <path style="fill:#F1C40F;" d="M11.812,0C5.289,0,0,5.289,0,11.812s5.289,11.813,11.812,11.813s11.813-5.29,11.813-11.813
        S18.335,0,11.812,0z M14.271,18.307c-0.608,0.24-1.092,0.422-1.455,0.548c-0.362,0.126-0.783,0.189-1.262,0.189
        c-0.736,0-1.309-0.18-1.717-0.539s-0.611-0.814-0.611-1.367c0-0.215,0.015-0.435,0.045-0.659c0.031-0.224,0.08-0.476,0.147-0.759
        l0.761-2.688c0.067-0.258,0.125-0.503,0.171-0.731c0.046-0.23,0.068-0.441,0.068-0.633c0-0.342-0.071-0.582-0.212-0.717
        c-0.143-0.135-0.412-0.201-0.813-0.201c-0.196,0-0.398,0.029-0.605,0.09c-0.205,0.063-0.383,0.12-0.529,0.176l0.201-0.828
        c0.498-0.203,0.975-0.377,1.43-0.521c0.455-0.146,0.885-0.218,1.29-0.218c0.731,0,1.295,0.178,1.692,0.53
        c0.395,0.353,0.594,0.812,0.594,1.376c0,0.117-0.014,0.323-0.041,0.617c-0.027,0.295-0.078,0.564-0.152,0.811l-0.757,2.68
        c-0.062,0.215-0.117,0.461-0.167,0.736c-0.049,0.275-0.073,0.485-0.073,0.626c0,0.356,0.079,0.599,0.239,0.728
        c0.158,0.129,0.435,0.194,0.827,0.194c0.185,0,0.392-0.033,0.626-0.097c0.232-0.064,0.4-0.121,0.506-0.17L14.271,18.307z
        M14.137,7.429c-0.353,0.328-0.778,0.492-1.275,0.492c-0.496,0-0.924-0.164-1.28-0.492c-0.354-0.328-0.533-0.727-0.533-1.193
        c0-0.465,0.18-0.865,0.533-1.196c0.356-0.332,0.784-0.497,1.28-0.497c0.497,0,0.923,0.165,1.275,0.497
        c0.353,0.331,0.53,0.731,0.53,1.196C14.667,6.703,14.49,7.101,14.137,7.429z"/>
    </g>
    </svg>
  `;
  infoSymbol.setAttribute("viewBox", "0 0 512 512");

  infoLink.appendChild(infoSymbol);
  footer.append(copyright, infoLink);
  document.body.append(footer);
}

//TODO: IMPLEMENT
function addSearchInput () {
  const inputDiv = document.createElement("div");
  const searchInput = document.createElement("input");
  const magnifyingSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  searchInput.placeholder = "Search..."
  searchInput.type = "text";
  magnifyingSvg.innerHTML = `
    <svg fill="#2274A5" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 512 512" xml:space="preserve">
      <g>
        <g>
          <g>
            <path d="M145.067,136.542h102.4c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-102.4
              c-4.719,0-8.533,3.823-8.533,8.533S140.348,136.542,145.067,136.542z"/>
            <path d="M196.267,273.075H128c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533h68.267
              c4.719,0,8.533-3.823,8.533-8.533C204.8,276.898,200.986,273.075,196.267,273.075z"/>
            <path d="M170.667,230.409c0-4.71-3.814-8.533-8.533-8.533h-51.2c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h51.2
              C166.852,238.942,170.667,235.119,170.667,230.409z"/>
            <path d="M110.933,187.742H230.4c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533H110.933
              c-4.719,0-8.533,3.823-8.533,8.533C102.4,183.919,106.214,187.742,110.933,187.742z"/>
            <path d="M264.533,273.075H230.4c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533h34.133
              c4.719,0,8.533-3.823,8.533-8.533C273.067,276.898,269.252,273.075,264.533,273.075z"/>
            <path d="M386.313,338.057c-3.328,3.328-3.328,8.738,0,12.066l18.108,18.108c1.664,1.673,3.849,2.5,6.033,2.5
              c2.176,0,4.361-0.828,6.033-2.5c3.328-3.328,3.328-8.73,0-12.066l-18.099-18.108
              C395.051,334.729,389.649,334.729,386.313,338.057z"/>
            <path d="M499.499,439.177l-59.802-59.793c-1.596-1.604-3.763-2.5-6.033-2.5h-0.008c-2.261,0-4.437,0.905-6.042,2.509
              l-24.064,24.201c-3.328,3.345-3.311,8.738,0.034,12.066c3.354,3.328,8.747,3.319,12.066-0.034l18.031-18.125l53.751,53.743
              c4.83,4.838,7.501,11.264,7.501,18.099s-2.671,13.269-7.501,18.099c-9.975,9.975-26.206,9.992-36.198,0.009l-101.12-101.12
              c-3.328-3.328-8.73-3.328-12.066,0c-3.328,3.337-3.328,8.738,0,12.075l101.12,101.111c8.311,8.32,19.234,12.476,30.157,12.476
              s21.862-4.164,30.174-12.476c8.055-8.064,12.501-18.773,12.501-30.174C512,457.95,507.554,447.232,499.499,439.177z"/>
            <path d="M409.6,204.809c0-112.922-91.878-204.8-204.8-204.8S0,91.887,0,204.809s91.878,204.8,204.8,204.8
              S409.6,317.73,409.6,204.809z M204.8,392.542c-103.518,0-187.733-84.215-187.733-187.733S101.282,17.075,204.8,17.075
              s187.733,84.215,187.733,187.733S308.318,392.542,204.8,392.542z"/>
            <path d="M204.8,34.142c-94.106,0-170.667,76.561-170.667,170.667S110.694,375.475,204.8,375.475s170.667-76.561,170.667-170.667
              S298.906,34.142,204.8,34.142z M204.8,358.409c-84.693,0-153.6-68.907-153.6-153.6s68.907-153.6,153.6-153.6
              s153.6,68.907,153.6,153.6S289.493,358.409,204.8,358.409z"/>
            <path d="M298.667,221.875h-102.4c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h102.4
              c4.719,0,8.533-3.823,8.533-8.533S303.386,221.875,298.667,221.875z"/>
            <path d="M298.667,170.675h-34.133c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533h34.133
              c4.719,0,8.533-3.823,8.533-8.533C307.2,174.498,303.386,170.675,298.667,170.675z"/>
          </g>
        </g>
      </g>
    </svg>
  `;

  inputDiv.classList = "input-div"
  searchInput.id = "searchInput";
  inputDiv.append(magnifyingSvg, searchInput);
  return inputDiv;
}

/**
 * self-explanatory
 */
function logout () {
  removeToken();
  removeProfilePicture();
  removeUserID();
  removeUsername();
  window.location.href = "index.html";
}