import "firebase/firestore";
import {socialConverter} from "../models/SocialPost";

class SocialService {
  constructor(firebase) {
    this.db = firebase.firestore();
    this.realtimeUpdates()
  }
  /*
  create = async group => {
    const groupRef = await this.db.collection("groups").doc();
    await groupRef.withConverter(groupConverter).set(group);
    return groupRef;
  };
*/

  realtimeUpdates = async () =>{
    await this.db.collection("SocialPosts")
    .withConverter(socialConverter)
    .onSnapshot(this.getPosts);
 
  }

  getPosts = async () => {
    const posts = await this.db
    .collection("SocialPosts")
    .withConverter(socialConverter)
    .get();

    return posts.docs.map(doc => doc.data());

  };


}
export default SocialService;
