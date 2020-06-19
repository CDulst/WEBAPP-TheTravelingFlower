import "firebase/firestore";

import { groupConverter } from "../models/Group";
import { userConverter } from "../models/User";
import { messageConverter } from "../models/Message";

class UserService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }
  /*
  /*ADDED DIY 
  create = async group => {
    const groupRef = await this.db.collection("groups").doc();
    await groupRef.withConverter(groupConverter).set(group);
    return groupRef;
  };

  createMessage = async message => {
    return await this.db
      .collection("groups")
      .doc(message.group.id)
      .collection("messages")
      .doc()
      .withConverter(messageConverter)
      .set(message);
  };

  getMessages = async (groupId, onChange) => {
    
    await this.db
      .collectionGroup("messages")
      .where("groupId", "==", groupId)
      .orderBy("timestamp")
      .withConverter(messageConverter)
      .onSnapshot(async snapshot => {
        snapshot.docChanges().forEach(async change => {
          if (change.type === "added") {
            const messageObj = change.doc.data();
            onChange(messageObj);
          }
        });
      });
  };
*/
}
export default UserService;
