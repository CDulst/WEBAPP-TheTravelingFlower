import "firebase/firestore";
import {journeyConverter} from "../models/Journey";

class JourneyConverter {
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
    await this.db.collection("Journeys")
    .withConverter(journeyConverter)
    .onSnapshot(this.getJourneys);
  }

  getJourneys = async () => {
    const journeys = await this.db
    .collection("Journeys")
    .withConverter(journeyConverter)
    .get();

    return journeys.docs.map(doc => doc.data());

  };


}
export default JourneyConverter;
