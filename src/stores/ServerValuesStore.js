import { decorate, observable, action } from "mobx";
import ServerService from "../services/serverService";

class ServerValues {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.serverService = new ServerService (this.rootStore.firebase);
        this.serverValues = [];
    }

    addServerValue (serverValue) {
        this.serverValues.push(serverValue);
        console.log(this.serverValues);
    }
}

decorate(ServerValues, {
    rootStore: observable,
    serverValues: observable,
    addServerValue: action
})

export default ServerValues;