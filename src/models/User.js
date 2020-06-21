import { configure, decorate, observable, action } from "mobx";
import {rootStore} from "../stores/index.js";
class User {
    constructor({id, email, name, phonenumber, avatar}) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.phonenumber = phonenumber
        if(!avatar) {
            this.avatar = `https://avatars.dicebear.com/v2/identicon/${name}.svg`;
        }
        rootStore.userStore.addUser(this);
        if (rootStore.uiStore.currentUser){
          const user = rootStore.userStore.filterUsersByEmail(rootStore.uiStore.currentUser.email);
          console.log(user);
          rootStore.uiStore.setCurrentUser(user);
        }
    }
}

decorate(User, {
    id: observable,
    email: observable,
    name: observable,
    phonenumber: observable,
    avatar: observable
    
})

const userConverter = {
    toFirestore: function(user) {
      return {
        email: user.email,
        name: user.name,
        phone: user.phonenumber
      };
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      if (!rootStore.userStore.findUserByEmail(data.email) || data.phonenumber === undefined){
        return new User({
          id: snapshot.id,
          email: data.email,
          name: data.name,
          phonenumber: data.phone,
        });
      }
    }
  };

export {userConverter};
export default User;