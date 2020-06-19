import { decorate, observable, action } from "mobx";

class ChallengeStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.challenges = [];
    }

    addChallenge(challenge) {
        this.challenges.push(challenge);
    }
}

decorate(ChallengeStore, {
    challenges: observable,
    rootStore: observable,
    addChallenge: action
})

export default ChallengeStore;