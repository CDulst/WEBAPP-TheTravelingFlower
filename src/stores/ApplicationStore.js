import { decorate, action, observable } from "mobx";

class ApplicationStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.applications = [];
    }

    addApplication (application) {
        this.applications.push(application);
    }
}

decorate(ApplicationStore, {
    applications: observable,
    addApplication: action,
    rootStore: observable
})

export default ApplicationStore;