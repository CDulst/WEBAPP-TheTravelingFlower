import { decorate, observable, action } from "mobx";
import JourneyService from "../services/journeyService";
class JourneyStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.journeyService = new JourneyService(this.rootStore.firebase);
        this.journeys= [];
    }

    addJourney(journey) {
        this.journeys.push(journey);

    
    }

    findJourneyById(id){
        
        return this.journeys.find(journey => journey.id === id);
    }
}

decorate(JourneyStore, {
    challenges: observable,
    rootStore: observable,
    addChallenge: action
})

export default JourneyStore;