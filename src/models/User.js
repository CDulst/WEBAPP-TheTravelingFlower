import { configure, decorate, observable, action } from "mobx";

class User {
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
        phone: user.phone
      };
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      return new User({
        id: snapshot.id,
        name: data.name,
        pic: data.pic,
        ownerId: data.ownerId,
        creationDate: data.creationDate
      });
    }
  };

export default User;