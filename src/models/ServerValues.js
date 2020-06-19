import { decorate, observable } from "mobx";

class ServerValues {
    constructor({location, donation=0, currentChallenge, currentCarrier}){
        this.location = location;
        this.donation = donation;
        this.currentCarrier = currentCarrier;
        this.currentChallenge = currentChallenge;
    }
}

decorate(ServerValues, {
    location: observable,
    donation: observable,
    currentCarrier: observable,
    currentChallenge: observable
})

export default ServerValues;