import { decorate, observable, action } from "mobx";

class CarrierStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.cariers = []
    }

    addCarrier(carrier) {
        this.cariers.push(carrier);
    }
}

decorate(CarrierStore, {
    cariers: observable,
    addCarrier: action,
    rootStore: observable
})

export default CarrierStore;