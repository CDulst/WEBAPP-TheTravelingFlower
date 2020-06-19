import { decorate, observable } from "mobx";
import {rootStore} from "../stores/index.js";
class Challenge {
    constructor({id, title, hashtag, description, videoSource, donationGoal = 0, currentSum = 0, routeId}) {
        this.id = id;
        this.title = title;
        this.hashtag = hashtag;
        this.description = description;
        this.videoSource = videoSource;
        this.donationGoal = donationGoal;
        this.currentSum = currentSum;
        this.routeId = routeId;
        rootStore.challengeStore.addChallenge(this);
    }
}



decorate(Challenge, {
    id: observable,
    title: observable,
    hashtag: observable,
    description: observable,
    videoSource: observable,
    donationGoal: observable,
    currentSum: observable,
    routeId: observable
})

const challengeConverter = {
    toFirestore: function(challenge) {
    return {
    currentSum: challenge.currentSum,
    description: challenge.description,
    donationGoal: challenge.donationGoal,
    hashtag: challenge.hashtag,
    routeID: challenge.routeId,
    title: challenge.title,
    videoSRC: challenge.videoSource
    };
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      console.log(options);
      if (!rootStore.challengeStore.findChallengeById(snapshot.id)){
        return new Challenge({
        id: snapshot.id,
        title: data.title,
        hashtag: data.hashtag,
        description: data.description,
        videoSource: data.videoSRC,
        donationGoal: data.donationGoal,
        currentSum: data.currentSum,
        routeId: data.routeID
        });
      }
     
    }
  };

export {challengeConverter}
export default Challenge;