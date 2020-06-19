import { decorate, observable } from "mobx";

class SocialPostModel {
    constructor({id, title, pic, userName, type, content, hashTag}){
        this.id = id;
        this.title = title;
        this.pic = pic;
        this.userName = userName;
        this.type = type;
        this.content = content;
        this.hashTag = hashTag
    }
}

decorate(SocialPostModel, {
    id: observable,
    title: observable,
    pic: observable,
    userName: observable,
    type: observable,
    content: observable,
    hashTag: observable
})

export default SocialPostModel;