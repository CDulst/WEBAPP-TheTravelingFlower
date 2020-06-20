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

    getCarrierById = id => this.carriers.find(carrier => carrier.id ===id)

    findCarrierById(id){
        console.log(id)
        const check = this.carriers.find(carrier => carrier.id === id);
        if (check){
            console.log(check.id);
        }
        return check;
    }
    test(id){
        console.log(id)
        const check = this.carriers.find(carrier => carrier.id === id);
        if (check){
            console.log(check.id);
            return check.id;
        }
    }
}

decorate(CarrierStore, {
    carriers: observable,
    addCarrier: action,
    rootStore: observable,
    findCarrier: action,
})

export default CarrierStore;