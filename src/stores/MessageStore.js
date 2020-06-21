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

    }

    findMessageById(id){
        return this.messages.find(message => message.id === id);
    }

    
    createMessage = async message => {
        return await this.messageService.create(message);
      };
}

decorate(MessageStore, {
    rootStore: observable,
    messages: observable,
    addMessage: action
})

export default MessageStore;