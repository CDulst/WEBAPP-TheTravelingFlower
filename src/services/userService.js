import "firebase/firestore";
import {userConverter} from "../models/User";
class UserService {
  constructor(firebase) {
    this.db = firebase.firestore();
    this.realtimeUpdates()
  }
  /*
  create = async group => {
    const groupRef = await this.db.collection("groups").doc();
    await groupRef.withConverter(groupConverter).set(group);
    return groupRef;
  };
*/

  realtimeUpdates = async () =>{
    await this.db.collection("Users")
    .withConverter(userConverter)
    .onSnapshot(this.getUsers);
 
  }

  create = async user => {
    return await this.db
      .collection("Users")
      .doc(user.email)
      .withConverter(userConverter)
      .set(user);
  };

  getUsers = async () => {
    const users = await this.db
    .collection("Users")
    .withConverter(userConverter)
    .get();

    return users.docs.map(doc => doc.data());
  };


}
export default UserService;
