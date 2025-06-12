export class User {
    constructor (id, name, password, firstLogin, friends, conversations, likes, privateMode) {
        this.id = id;
        this.name = name;
        this.firstLogin = firstLogin;
        this.friends = friends;
        this.conversations = conversations;
        this.likes = likes;
        this.privateMode = privateMode;
    }
}