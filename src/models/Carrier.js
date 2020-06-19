import { decorate, observable, action } from "mobx";
import {rootStore} from "../stores/index.js";
class Carrier {
    constructor({id, name, pic, age, transport, bio, flag, routeId}){
        this.id = id;
        this.name = name;
        this.journeys = [];
        this.pic = pic;
        this.age = age;
        this.transport = transport;
        this.bio = bio;
        this.flag = flag;
        this.routeId = routeId;
        rootStore.carrierStore.addCarrier(this);
    }
    linkJourney(journey) {
        !this.journeys.includes(journey) && this.journeys.push(journey);
    }
   
}

decorate(Carrier, {
    id: observable,
    name: observable,
    journeys: observable,
    age: observable,
    transport: observable,
    bio: observable,
    flag: observable,
    routeId: observable,
    linkJourney: action
})

const carrierConverter = {
    toFirestore: function(carrier) {
    return {
    age: carrier.age,
    bio: carrier.bio,
    flag: carrier.flag,
    name: carrier.name,
    pic: carrier.pic,
    routeId: carrier.routeId,
    transport: carrier.transport
    

    };
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      console.log(options);
      if (!rootStore.carrierStore.findCarrierById(snapshot.id)){
        return new Carrier({
        id: snapshot.id,
        name: data.name,
        pic: data.pic,
        age: data.age,
        transport: data.transport,
        bio: data.bio,
        flag:data.flag,
        routeId: data.routeID
        });
      }
     
    }
  };

  export {carrierConverter}

export default Carrier;