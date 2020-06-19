import { decorate, observable, action } from "mobx";
import MessageService from "../services/messageService";



class MessageStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.messageService = new MessageService (this.rootStore.firebase);
        this.messages = [];
    }

    addMessage (message) {
        this.messages.push(message);
        console.log(this.messages);
    }

    findMessageById(id){
        return this.messages.find(message => message.id === id);
    }
}

decorate(MessageStore, {
    rootStore: observable,
    messages: observable,
    addMessage: action
})

export default MessageStore;