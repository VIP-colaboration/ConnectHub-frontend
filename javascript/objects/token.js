export function setToken(token) {
    localStorage.setItem("ch_token", token);
}

export function removeToken() {
    localStorage.removeItem("ch_token");
}

export function getToken() {
    return "bearer " + localStorage.getItem("ch_token");
}