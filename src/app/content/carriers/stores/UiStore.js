import { decorate, observable, action } from "mobx";
import { rootStore } from "../../../../stores";


class UiStore {
    constructor() {
        this.selectedCarrier = rootStore.carrierStore.carriers[0]
        this.selectedRoute = undefined;
        this.selectedCarrierFromTracker = undefined;
    }

    setSelectedCarrierFromTracker (carrier) {
        this.selectedCarrierFromTracker = carrier
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