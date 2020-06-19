import { decorate, observable,action } from "mobx";
import UserService from "../services/userService";

class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.userService = new UserService (this.rootStore.firebase);
        this.users = [];
        this.getUsers();
    }

    getUsers = async () => {
       const users = await this.userService.getUsers();
       console.log(users);
       
    }


    addUser (user) {
        this.users.push(user);
    }
}

decorate(UserStore, {
    rootStore: observable,
    users: observable,
    addUser: action,
    createUserFromJson: action,
    getUsers: action,
    findUserById: action,
})


export default UserStore;