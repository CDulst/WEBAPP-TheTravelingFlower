import{ decorate, observable} from "mobx"
import {rootStore} from "../stores/index.js";

class Journey {
    constructor({id, location,sorted, title, images, text, carrierID,date}) {
        this.id = id;
        this.location = location;
        this.title = title;
        this.images = images;
        this.text = text;
        this.carrierID = carrierID;
        this.date = date;
        this.sorted = sorted;
        rootStore.journeyStore.addJourney(this);
        rootStore.carrierStore.findCarrierById(this.carrierID).linkJourney(this);

    }
  
}
const journeyConverter = {
    toFirestore: function(journey) {
      return {
      carrierID: journey.carrierID,
      date: journey.date,
      images:journey.images,
      location:journey.location,
      text: journey.text,
      title: journey.title,
      sorted: journey.sorted
      };
    },
    fromFirestore: function(snapshot, options) {
      console.log("hello");
      const data = snapshot.data(options);
      if (!rootStore.journeyStore.findJourneyById(snapshot.id)){
        return new Journey({
        id: snapshot.id,
        location: data.location,
        sorted: data.sorted,
        title: data.title,
        images: data.images,
        text: data.text,
        carrierID: data.carrierID,
        date: data.date
        });
      }
     
    }
  };
decorate(Journey, {
    id: observable,
    location: observable,
    title: observable,
    images: observable,
    text: observable
})
export  {journeyConverter}
export default Journey;