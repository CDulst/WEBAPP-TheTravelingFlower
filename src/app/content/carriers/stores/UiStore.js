import { decorate, observable, action } from "mobx";

class UiStore {
    constructor() {
        this.selectedCarrier = undefined
        this.selectedRoute = undefined
    }

    setSelectedCarrier(carrier) {
        this.selectedCarrier = carrier;
    }

    setSelectedRoute (route) {
        this.selectedRoute = route;
    }
}

decorate(UiStore, {
    selectedCarrier: observable,
    setSelectedCarrier: action,
    selectedRoute: observable,
    setSelectedRoute: action
})

const uiStoreCarriers = new UiStore();

export {uiStoreCarriers};

export default UiStore