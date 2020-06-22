import { decorate, observable, action } from "mobx";
import ServerService from "../services/serverService";
import DonationController from "../controllers/donationController";
class ServerValues {
    constructor(rootStore) {
        this.donationController = new DonationController(rootStore);
        this.rootStore = rootStore;
        this.serverService = new ServerService (this.rootStore.firebase);
        this.serverValues = [];
    }

    addServerValue (serverValue) {
        this.serverValues.push(serverValue);
        if (this.donationController.currentdonation <= 0){
            this.donationController.changecurrent(serverValue.donation);
        }
        this.donationController.changelive(serverValue.donation);
        console.log(this.serverValues);
    }
}

decorate(ServerValues, {
    rootStore: observable,
    serverValues: observable,
    addServerValue: action
})

export default ServerValues;