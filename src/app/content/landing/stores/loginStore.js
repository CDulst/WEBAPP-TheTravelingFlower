import { decorate, observable, action } from "mobx";
import {rootStore} from "../../../../stores/index";


class LoginStore {
  constructor() {
  this.email = ""
  this.password = ""
  this.emailError = ""
  this.passwordError = ""
  this.enableButton = false;
  }

  login = async() => {
    const user = {email:this.email,password:this.password}
    const feedback = await rootStore.uiStore.loginUser(user);
    this.checkFeedback(feedback);
  }

  checkFeedback(feedback){
    console.log(feedback);
    this.emailError = "";
    this.password = "";
    if (feedback === "auth/user-not-found"){
        this.emailError = "Email not found";
        this.enableButton = false;
    }
  if (feedback === "auth/invalid-email"){
    this.emailError = "invalid email";
    this.enableButton = false;
  } 
    else if (feedback === "auth/wrong-password"){
        this.passwordError = "Wrong Password";
        this.enableButton = false;
    }
      

  }

  checkEnable(){
      if (this.email !== "" && this.password !== ""){
          this.enableButton = true;
      }
      else{
          this.enableButton = false;
      }
  }
 
  
}

decorate(LoginStore, {
  checkEnable: action,
  enableButton:observable,
  checkFeedback: action,
  login:action
});

const loginStore = new LoginStore();
export{loginStore};
export default LoginStore;
