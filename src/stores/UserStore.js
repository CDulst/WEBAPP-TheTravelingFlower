import { decorate, observable,action } from "mobx";

class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.users = [];
    }

    addUser (user) {
        this.users.push(user);
    }
}

decorate(UserStore, {
    rootStore: observable,
    users: observable,
    addUser: action
})

export default UserStore;