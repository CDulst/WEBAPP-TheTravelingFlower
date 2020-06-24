import "firebase/firestore";
import {applicationConverter} from "../models/Application";

class ApplicationService {
  constructor(firebase) {
    this.db = firebase.firestore();
}
  
  create = async application => {
    
    const applicationRef = await this.db.collection("Application").doc(application.id)
    .set(application);
    return applicationRef;
  };


 


}
export default ApplicationService;
