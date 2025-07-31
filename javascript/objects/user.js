export class User {
    constructor (id, name, password, firstLogin, friends, conversations, numberOfPosts, likes, privateMode) {
        this.id = id;
        this.name = name;
        this.firstLogin = firstLogin;
        this.friends = friends;
        this.conversations = conversations;
        this.numberOfPosts = numberOfPosts;
        this.likes = likes;
        this.privateMode = privateMode;
    }
}