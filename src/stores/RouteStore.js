import { decorate, observable, action } from "mobx";
import RouteService from "../services/routeService";


class RouteStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.routeService = new RouteService (this.rootStore.firebase);
        this.routes = [];
    }

    addRoute(route) {
        this.routes.push(route);
        console.log(this.routes);
    }

    findRouteById(id){
        return this.routes.find(route => route.id === id);
    }
}

decorate(RouteStore, {
    rootStore: observable,
    routes: observable,
    addRoute: action,
    findRouteById: action
})

export default RouteStore;