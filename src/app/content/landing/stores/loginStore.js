import { decorate, observable, action } from "mobx";
import {rootStore} from "../../../../stores/index";


class LoginStore {
  constructor() {
  this.email = ""
  this.password = ""
  this.emailError = ""
  this.passwordError = ""
  this.enableButton = false;
  this.emailCorrect = false;
  }

  login = async() => {
    const user = {email:this.email,password:this.password}
    const feedback = await rootStore.uiStore.loginUser(user);
    this.checkFeedback(feedback);
  }
   
  putonNull(){
    this.enableButton = true;
      this.passwordError = "";
      this.emailError = "";
  }

  checkFeedback(feedback){
    console.log(feedback);
    if (feedback === "auth/user-not-found"){
        this.emailError = "Email not found";
        this.enableButton = false;
    }
  else if (feedback === "auth/invalid-email"){
    this.emailError = "invalid email";
    this.enableButton = false;
  } 
    else if (feedback === "auth/wrong-password"){
        this.emailCorrect = true;
        this.passwordError = "Wrong Password";
        this.enableButton = false;
    }
    else{
       console.log(feedback.user.email);
       rootStore.uiStore.setCurrentUser(rootStore.userStore.findUserByEmail(feedback.user.email))
       console.log(rootStore.uiStore.currentUser);
    }
      

  }

  checkEnable(){
      this.enableButton = true;
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
  emailError: observable,
  passwordError: observable,
  enableButton:observable,
  checkFeedback: action,
  putonNull: action,
  login:action
});

const loginStore = new LoginStore();
export{loginStore};
export default LoginStore;
