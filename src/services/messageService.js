import "firebase/firestore";
import {messageConverter} from "../models/Message"

class MessageService {
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
    await this.db.collection("Messages")
    .withConverter(messageConverter)
    .onSnapshot(this.getMessages);
  }

  getMessages = async () => {
    const messages = await this.db
    .collection("Messages")
    .withConverter(messageConverter)
    .get();
    return messages.docs.map(doc => doc.data());
  };

  create = async message => {
    return await this.db
      .collection("Messages")
      .doc(message.id)
      .withConverter(messageConverter)
      .set(message);
  };


}
export default MessageService;
