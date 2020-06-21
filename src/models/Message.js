import { decorate, observable } from "mobx";
import {rootStore} from "../stores/index.js";

class Message {
    constructor({id, userEmail, content}) {
        this.id = id;
        this.userEmail = userEmail;
        this.content = content
        rootStore.messageStore.addMessage(this);
    }
}
const messageConverter = {
    toFirestore: function(message) {
      return {
      content: message.content,
      useremail: message.userEmail,
      };
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      if (!rootStore.messageStore.findMessageById(snapshot.id)){
        return new Message({
        id: snapshot.id,
        userEmail: data.useremail,
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