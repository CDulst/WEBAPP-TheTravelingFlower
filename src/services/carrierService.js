import "firebase/firestore";
import {carrierConverter} from "../models/Carrier";

class CarrierService {
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
    await this.db.collection("Carriers")
    .withConverter(carrierConverter)
    .onSnapshot(this.getCarriers);
 
  }

  getCarriers = async () => {
    const carriers = await this.db
    .collection("Carriers")
    .withConverter(carrierConverter)
    .get();

    return carriers.docs.map(doc => doc.data());
  };




}
export default CarrierService;
