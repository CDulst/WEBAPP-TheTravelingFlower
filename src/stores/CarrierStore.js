import { decorate, observable, action } from "mobx";
import CarrierService from "../services/carrierService";

class CarrierStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.carrierService = new CarrierService (this.rootStore.firebase);
        this.carriers = [];
    }

    addCarrier(carrier) {
        this.carriers.push(carrier);
        console.log(this.carriers);
    }

    findCarrierById(id){
        return this.carriers.find(carrier => carrier.id === id);
    }
}

decorate(CarrierStore, {
    carriers: observable,
    addCarrier: action,
    rootStore: observable
})

export default CarrierStore;