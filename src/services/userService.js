import "firebase/firestore";

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
    const snapshot = await this.db
    .collection("Users")
    .get();

    return await snapshot.docs[0].data();


  };


}
export default UserService;
