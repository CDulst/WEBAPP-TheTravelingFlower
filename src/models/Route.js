import { decorate, observable } from "mobx";
import {rootStore} from "../stores/index.js";

class Route {
    constructor({id, startCoordinate, endCoordinate, startName, endName, kmDone = 0, carrierId, status, distance}) {
        this.id = id;
        this.startCoordinate = startCoordinate;
        this.endCoordinate = endCoordinate;
        this.startName = startName;
        this.endName = endName;
        this.kmDone = kmDone;
        this.carrierId = carrierId;
        this.status = status;
        this.distance = distance;
        rootStore.routeStore.addRoute(this);
    }
}

decorate(Route, {
    id: observable,
    startCoordinate: observable,
    endCoordinate: observable,
    startName: observable,
    endName: observable,
    kmDone: observable,
    carrierId: observable,
    status: observable,
    distance: observable
})

const routeConverter = {
    toFirestore: function(socialPost) {
      return {
      carrierID: socialPost.carrierID,
      distance: socialPost.distance,
      end: socialPost.endName,
      endGEO: socialPost.endCoordinate,
      kmDone: socialPost.kmDone,
      start: socialPost.startName,
      startGEO: socialPost.startCoordinate,
      status: socialPost.status,

      };
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      console.log(options);
      if (!rootStore.routeStore.findRouteById(snapshot.id)){
        return new Route({
        id: snapshot.id,
        startCoordinate: data.startGEO,
        endCoordinate: data.endGEO,
        startName: data.start,
        endName: data.end,
        kmDone: data.kmDone,
        carrierId: data.carrierID,
        status: data.status,
        distance: data.distance
        });
      }
     
    }
  };
export {routeConverter}
export default Route;