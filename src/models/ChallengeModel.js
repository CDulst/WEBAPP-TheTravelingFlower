import { decorate, observable } from "mobx";

class ChallengeModel {
    constructor({id, title, hashtag, description, videoSource, donationGoal = 0, currentSum = 0, routeId}) {
        this.id = id;
        this.title = title;
        this.hashtag = hashtag;
        this.description = description;
        this.videoSource = videoSource;
        this.donationGoal = donationGoal;
        this.currentSum = currentSum;
        this.routeId = routeId;
    }
}

decorate(ChallengeModel, {
    id: observable,
    title: observable,
    hashtag: observable,
    description: observable,
    videoSource: observable,
    donationGoal: observable,
    currentSum: observable,
    routeId: observable
})

export default ChallengeModel;