import { decorate, observable, action } from "mobx";
import ChallengeService from "../services/challengeService";

class ChallengeStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.challengeService = new ChallengeService (this.rootStore.firebase);
        this.challenges = [];
        this.currentChallenge = undefined;
    }

    addChallenge(challenge) {
        this.challenges.push(challenge);
    
    }

    findChallengeById(id){
        return this.challenges.find(challenge => challenge.id === id);
    }

    setcurrentChallenge(challenge) {
        this.currentChallenge = challenge;
    }
}

decorate(ChallengeStore, {
    challenges: observable,
    rootStore: observable,
    addChallenge: action,
    setcurrentChallenge: action
})

export default ChallengeStore;