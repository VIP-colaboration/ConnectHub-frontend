export function setToken(token) {
    localStorage.setItem("ch_token", token);
}

export function removeToken() {
    localStorage.removeItem("ch_token");
}