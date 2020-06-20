import { decorate, observable } from "mobx";
import {rootStore} from "../stores/index.js";

class Application {
    constructor({id, name, email, identification, age, streetName, number, postalCode, country, route}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.identification = identification;
        this.age = age;
        this.streetName = streetName;
        this.number = number;
        this.postalCode = postalCode;
        this.country = country;
        this.route = route;
    }
}

decorate(Application, {
    id: observable,
    name: observable,
    email: observable,
    identification: observable,
    age: observable,
    streetName: observable,
    number: observable,
    postalCode: observable,
    country: observable,
    route: observable
})

export default Application;