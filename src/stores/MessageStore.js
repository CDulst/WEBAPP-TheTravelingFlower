import { decorate, observable, action } from "mobx";

class MessageStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.messages = [];
    }

    addMessage (message) {
        this.messages.push(message);
    }
}

decorate(MessageStore, {
    rootStore: observable,
    messages: observable,
    addMessage: action
})

export default MessageStore;