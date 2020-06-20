import { decorate, observable,action } from "mobx";
import UserService from "../services/userService";

class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.userService = new UserService (this.rootStore.firebase);
        this.users = [];
    }

   

    addUser (user) {
    this.users.push(user);
    }

    removeUserById (id){
    const user = this.findUserById(id);
    const index = this.users.indexOf(user);
    this.users.splice(index,1);
    }

    findUserById(id){
        return this.users.find(user => user.id === id);
    }
}

decorate(UserStore, {
    rootStore: observable,
    users: observable,
    addUser: action,
    createUserFromJson: action,
    getUsers: action,
    findUserById: action,
    removeUserById: action
})


export default UserStore;