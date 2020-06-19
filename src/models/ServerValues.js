import { decorate, observable } from "mobx";

class ServerValues {
    constructor({location, donation=0}){
        this.location = location;
        this.donation = donation;
    }
}

decorate(ServerValues, {
    location: observable,
    donation: observable
})

export default ServerValues;