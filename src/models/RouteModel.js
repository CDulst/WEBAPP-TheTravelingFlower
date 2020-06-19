import { decorate, observable } from "mobx";

class RouteModel {
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
    }
}

decorate(RouteModel, {
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

export default RouteModel;