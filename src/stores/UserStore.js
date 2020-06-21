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

    removeUserByEmail (Email){
    const user = this.findUserByEmail(Email);
    if (user.phonenumber === undefined){
        console.log("wtf");
        const index = this.users.indexOf(user);
        this.users.splice(index,1);
    }
    }

    findUserById(id){
        return this.users.find(user => user.id === id);
    }

    createUser = async user => {
        return await this.userService.create(user);
      };

    findUserByEmail(email){
        const user = this.users.find(user => user.email === email);

        return user;   
    }
    filterUsersByEmail(email){
        const user = this.users.find(user => user.email === email && user.name !== undefined);
    
        return user;
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