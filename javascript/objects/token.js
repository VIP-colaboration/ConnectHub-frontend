//HANDLES LOCAL STORAGE

export function setToken(token) {
    localStorage.setItem("ch_token", token);
}

export function removeToken() {
    localStorage.removeItem("ch_token");
}

export function getToken() {
    return "bearer " + localStorage.getItem("ch_token");
}

export function saveProfilePicture(image) {
    localStorage.setItem("profilePicture", image);
}

export function getProfilePicture() {
    localStorage.getItem("profilePicture");
}

export function removeProfilePicture() {
    localStorage.removeItem("profilePicture");
}

export function setUsername(username) {
    localStorage.setItem("username", username);
}

export function getUsername() {
    return localStorage.getItem("username");
}

export function removeUsername() {
    localStorage.getItem("username");
}

export function setUserID(userID) {
    localStorage.setItem("userID", userID);
}

export function getUserID() {
    return localStorage.getItem("userID");
}

export function removeUserID() {
    localStorage.getItem("userID");
}