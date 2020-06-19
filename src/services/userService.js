import "firebase/firestore";
import {userConverter} from "../models/User";
class UserService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }
  /*
  create = async group => {
    const groupRef = await this.db.collection("groups").doc();
    await groupRef.withConverter(groupConverter).set(group);
    return groupRef;
  };
*/
  

  getUsers = async () => {
    console.log(this.db)
    return await this.db
    .collection("users")
    .withConverter(userConverter)
    .get();

    


  };


}
export default UserService;
