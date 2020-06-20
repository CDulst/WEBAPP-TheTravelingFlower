import "firebase/firestore";
import {serverValuesConverter} from "../models/ServerValues";

class ServerService {
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
    await this.db.collection("Servervalues")
    .withConverter(serverValuesConverter)
    .onSnapshot(this.getServervalues);
 
  }

  getServervalues = async () => {
    const Servervalues = await this.db
    .collection("Servervalues")
    .withConverter(serverValuesConverter)
    .get();

    return Servervalues.docs.map(doc => doc.data());

  };


}
export default ServerService;
