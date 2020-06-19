import { decorate, observable } from "mobx";

class MessageModel {
    constructor({id, userId, content}) {
        this.id = id;
        this.userId = userId;
        this.content = content
    }
}

decorate(MessageModel, {
    id: observable,
    userId: observable,
    content: observable
})

export default MessageModel;