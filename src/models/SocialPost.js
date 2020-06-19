import { decorate, observable } from "mobx";
import {rootStore} from "../stores/index.js";
class SocialPost {
    constructor({id, title, pic, userName, type, content, hashTag}){
        this.id = id;
        this.content = content;
        this.hashTag = hashTag
        this.userName = userName;
        this.pic = pic;
        this.title = title;
        this.type = type;
        rootStore.socialPostStore.addPost(this);
    }
    
}



decorate(SocialPost, {
    id: observable,
    title: observable,
    pic: observable,
    userName: observable,
    type: observable,
    content: observable,
    hashTag: observable
})

const socialConverter = {
    toFirestore: function(socialPost) {
      return {
        content: socialPost.content,
        hashtag: socialPost.hashTag,
        name: socialPost.userName,
        pic: socialPost.pic,
        title: socialPost.title,
        type: socialPost.type
      };
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      console.log(options);
      if (!rootStore.socialPostStore.findPostById(snapshot.id)){
        return new SocialPost({
          id: snapshot.id,
          title: data.title,
          pic: data.pic,
          userName: data.name,
          type: data.type,
          content: data.content,
          hashTag: data.hashtag,
        });
      }
     
    }
  };

export {socialConverter};

export default SocialPost;