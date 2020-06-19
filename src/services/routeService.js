import "firebase/firestore";
import {routeConverter} from "../models/Route";

class RouteService {
  constructor(firebase) {
    this.db = firebase.firestore();
    this.realtimeUpdates()
  }
  /*
  create = async group => {
    const groupRef = await this.db.collection("groups").doc();
    await groupRef.withConverter(groupConverter).set(group);
    return groupRef;
  };
*/

  realtimeUpdates = async () =>{
    await this.db.collection("Routes")
    .withConverter(routeConverter)
    .onSnapshot(this.getRoutes);
 
  }

  getRoutes = async () => {
    const routes = await this.db
    .collection("Routes")
    .withConverter(routeConverter)
    .get();

    return routes.docs.map(doc => doc.data());

  };


}
export default RouteService;
