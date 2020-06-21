import { decorate, observable, action } from "mobx";

class UiStore {
    constructor() {
        this.selectedCarrier = undefined
    }

    setSelectedCarrier(carrier) {
        this.selectedCarrier = carrier;
    }
}

decorate(UiStore, {
    selectedCarrier: observable,
    setSelectedCarrier: action
})

const uiStoreCarriers = new UiStore();

export {uiStoreCarriers};

export default UiStore