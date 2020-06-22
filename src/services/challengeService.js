import "firebase/firestore";
import {challengeConverter} from "../models/Challenge";

class ChallengeService {
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
    await this.db.collection("Challenges")
    .withConverter(challengeConverter)
    .onSnapshot(this.getChallenges);
  }

  getChallenges = async () => {
    const challenges = await this.db
    .collection("Challenges")
    .withConverter(challengeConverter)
    .get();

    return challenges.docs.map(doc => doc.data());

  };


}
export default ChallengeService;
