import { decorate, observable, action } from "mobx";

class JourneyStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.journeys = [];
    }

    addJourney (journey) {
        this.journeys.push(journey);
    }
}

decorate(JourneyStore, {
    rootStore: observable,
    journeys: observable,
    addJourney: action
})

export default JourneyStore;