import { decorate, observable } from "mobx";
import {rootStore} from "../stores/index.js";

class Message {
    constructor({id, userId, content}) {
        this.id = id;
        this.userId = userId;
        this.content = content
        rootStore.messageStore.addMessage(this);
    }
}
const messageConverter = {
    toFirestore: function(message) {
      return {
      content: message.content,
      userid: message.userId,
      };
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      console.log(options);
      if (!rootStore.messageStore.findMessageById(snapshot.id)){
        return new Message({
        id: snapshot.id,
        userId: data.userid,
        content: data.content
        });
      }
     
    }
  };


decorate(Message, {
    id: observable,
    userId: observable,
    content: observable
})

export {messageConverter}
export default Message;