import { decorate, action, observable } from "mobx";

class ApplicationStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.applications = [];
    }

    addApplication (application) {
        this.applications.push(application);
    }
    findApplicationById(id){
        return this.applications.find(application => application.id === id);
    }
}

decorate(ApplicationStore, {
    applications: observable,
    addApplication: action,
    rootStore: observable
})

export default ApplicationStore;