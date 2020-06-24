import { decorate, action, observable } from "mobx";
import ApplicationService from "../services/applicationService";


class ApplicationStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.applicationService = new ApplicationService(rootStore.firebase);
        this.applications = [];
    }

    addApplication (application) {
        this.applications.push(application);
    }
    findApplicationById(id){
        return this.applications.find(application => application.id === id);
    }
    createApplication(app){
        console.log(app);
        this.applicationService.create(app);
    }
}

decorate(ApplicationStore, {
    applications: observable,
    addApplication: action,
    rootStore: observable
})

export default ApplicationStore;