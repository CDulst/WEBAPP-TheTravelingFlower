import { decorate, observable, action } from "mobx";

class RouteStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.routes = [];
    }

    addRoute(route) {
        this.routes.push(route);
    }
}

decorate(RouteStore, {
    rootStore: observable,
    routes: observable,
    addRoute: action
})

export default RouteStore;