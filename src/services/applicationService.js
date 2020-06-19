import "firebase/firestore";
/*import {userConverter} from "../models/User";*/

class ApplicationService {
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
    await this.db.collection("Application")
    .withConverter(applicationConverter)
    .onSnapshot(this.getApplications);
 
  }

  getApplications = async () => {
    const applications = await this.db
    .collection("Application")
    .withConverter(applicationConverter)
    .get();

    return applications.docs.map(doc => doc.data());

  };


}
export default ApplicationService;
