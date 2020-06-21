import { decorate, observable, action } from "mobx";
import AuthService from "../services/authService";
import User from "../models/User";
import {dataStore} from '../app/content/tracker/stores/DataStore'
import turf from 'turf';
class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
    this.currentCarrier = undefined;
    this.currentRoute = undefined;
    this.authService = new AuthService(
      this.rootStore.firebase,
      this.onAuthStateChanged
    );
  }

  setRoute(route) {
    this.currentRoute = route;
  }


  onAuthStateChanged = user => {
    if (user) {
      console.log(`De user is ingelogd: ${user.email}`);
      this.setCurrentUser(
        new User({
          id: user.uid,
          name: user.name,
          email: user.email,
          phonenumber: user.phonenumber
        })
      );
    }
  };

  logoutUser = async () => {
    const result = await this.authService.logout();
    this.setCurrentUser("");
    return result;
  };

  loginUser = async user => {
    console.log("ok");
    const result = await this.authService.login(user.email, user.password);
    return result;
  };

  setCurrentUser(user) {
    if (user !== ""){
        console.log(user.phonenumber);
        const userr = this.rootStore.userStore.findUserByEmail(user.email)
        this.rootStore.userStore.removeUserByEmail(userr.email);
        const userc = this.rootStore.userStore.findUserByEmail(user.email)
        this.currentUser = userc;
        console.log(this.currentUser);
    }
    else{
    this.currentUser = "";
    }
  }

  setCurrentCarrier(currentCarrier) {
    this.currentCarrier = currentCarrier;
  
  }
  registerUser = async user => {
    const result = await this.authService.register(
      user.name,
      user.email,
      user.phone,
      user.password
    );

    console.log(result);

    return result;
  };

  createUser = async (result,phone) => {
    const newRegisteredUser = new User({
        id: result.uid,
        email: result.email,
        name: result.displayName,
        phonenumber: phone
      });
  
      console.log(newRegisteredUser)
      
      if (result) {
        console.log("check");
        await this.rootStore.userStore.createUser(newRegisteredUser);
      }

      this.setCurrentUser(newRegisteredUser)
  
  }

}


decorate(UiStore, {
  currentUser: observable,
  loginUser: action,
  logoutUser: action,
  setCurrentUser: action,
  setCurrentCarrier: action,
  findCarrierByLocation: action
});

export default UiStore;
