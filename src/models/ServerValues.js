import { decorate, observable } from "mobx";
import {rootStore} from "../stores/index.js";

class ServerValues {
    constructor({location, donation, carrierID, challengeID}){
        this.location = location;
        this.donation = donation;
        this.carrierID = carrierID;
        this.challengeID = challengeID;
        rootStore.serverValuesStore.addServerValue(this);
    }
}

const serverValuesConverter = {
    toFirestore: function(serverValues) {
      return {
      carrierid: serverValues.carrierID,
      challengeid: serverValues.challengeID,
      donation: serverValues.donation,
      location: serverValues.location
      };
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
        return new ServerValues({
        location: data.location,
        donation: data.donation,
        carrierID: data.carrierID,
        challengeID: data.challengeID
        });
    }
  };


decorate(ServerValues, {
    location: observable,
    donation: observable,
    currentCarrier: observable,
    currentChallenge: observable
})

export {serverValuesConverter}

export default ServerValues;