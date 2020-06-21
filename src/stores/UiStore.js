import { decorate, observable, action } from "mobx";
import AuthService from "../services/authService";
import User from "../models/User";
class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
    this.currentCarrier = undefined;
    this.authService = new AuthService(
      this.rootStore.firebase,
      this.onAuthStateChanged
    );
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
    this.currentUser = user;
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
    
    const newRegisteredUser = new User({
      id: result.uid,
      name: result.displayName,
      avatar: result.photoURL,
      store: this.rootStore.userStore,
      email: result.email
    });
    /*
    if (result) {
      //user toevoegen aan onze users collection
      this.rootStore.userStore.createUser(newRegisteredUser);
    }
    */
    return result;
  };

}

decorate(UiStore, {
  currentUser: observable,
  loginUser: action,
  logoutUser: action,
  setCurrentUser: action
});

export default UiStore;
