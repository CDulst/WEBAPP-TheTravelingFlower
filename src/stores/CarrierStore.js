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
    }

    getCarrierById = id => this.carriers.find(carrier => carrier.id ===id)

    findCarrierById(id){
        const check = this.carriers.find(carrier => carrier.id === id);
        if (check){
          
        }
        return check;
    }
}

decorate(CarrierStore, {
    carriers: observable,
    addCarrier: action,
    rootStore: observable,
    findCarrier: action,
})

export default CarrierStore;