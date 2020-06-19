const { decorate, observable, action } = require("mobx");

class CarrierModel {
    constructor({id, name, journeys=[], avatar, age, transport, bio, flag, routeId}){
        this.id = id;
        this.name = name;
        this.journeys = journeys;
        if(!avatar) {
            this.avatar = `https://avatars.dicebear.com/v2/identicon/${name}.svg`;
        }
        this.age = age;
        this.transport = transport;
        this.bio = bio;
        this.flag = flag;
        this.routeId = routeId;
    }

    linkJourney(journey) {
        !this.journeys.includes(journey) && this.journeys.push(journey);
    }
}

decorate(CarrierModel, {
    id: observable,
    name: observable,
    journeys: observable,
    status: observable,
    avatar: observable,
    age: observable,
    transport: observable,
    bio: observable,
    flag: observable,
    routeId: observable,
    linkJourney: action
})

export default CarrierModel;