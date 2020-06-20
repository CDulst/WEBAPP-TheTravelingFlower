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

    ggetCarrierById = id => this.carriers.find(carrier => carrier.id === id);

    findCarrierById(id){
        console.log(id)
        console.log(this.carriers[0].id)
        console.log(this.carriers)
        return this.carriers.find(carrier => carrier.id === id);
        
    }
}

decorate(CarrierStore, {
    carriers: observable,
    addCarrier: action,
    rootStore: observable,
    findCarrier: action,
})

export default CarrierStore;