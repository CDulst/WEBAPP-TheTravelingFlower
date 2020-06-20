import { decorate, observable, action } from "mobx";
import SocialService from "../services/socialService";

class SocialPostStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.socialService = new SocialService (this.rootStore.firebase);
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }

        findPostById(id){
            return this.posts.find(post => post.id === id);
        }
}

decorate(SocialPostStore, {
    posts: observable,
    rootStore: observable,
    addPost: action,
    findPostById: action
})

export default SocialPostStore;