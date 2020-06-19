import { decorate, observable, action } from "mobx";

class ServerValues {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.serverValues = [];
    }

    addServerValue (serverValue) {
        this.serverValues.push(serverValue);
    }
}

decorate(ServerValues, {
    rootStore: observable,
    serverValues: observable,
    addServerValue: action
})

export default ServerValues;