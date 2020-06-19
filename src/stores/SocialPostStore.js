import { decorate, observable, action } from "mobx";

class SocialPostStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }
}

decorate(SocialPostStore, {
    posts: observable,
    rootStore: observable,
    addPost: action
})

export default SocialPostStore;