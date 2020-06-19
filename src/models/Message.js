import { decorate, observable } from "mobx";

class Message {
    constructor({id, userId, content}) {
        this.id = id;
        this.userId = userId;
        this.content = content
    }
}

decorate(Message, {
    id: observable,
    userId: observable,
    content: observable
})

export default Message;