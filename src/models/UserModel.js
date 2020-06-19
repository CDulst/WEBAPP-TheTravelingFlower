import { configure, decorate, observable, action } from "mobx";

class UserModel {
    constructor({id, email, name, phonenumber, avatar}) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.phonenumber = phonenumber
        if(!avatar) {
            this.avatar = `https://avatars.dicebear.com/v2/identicon/${name}.svg`;
        }
    }
}

decorate(UserModel, {
    id: observable,
    email: observable,
    name: observable,
    phonenumber: observable,
    avatar: observable
    
})

export default UserModel;