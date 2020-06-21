import { decorate, observable, action } from "mobx";
import {rootStore} from "../../../../stores/index";


class RegisterStore {
  constructor() {
  this.email = "";
  this.name = "";
  this.phone = "";
  this.password = "";
  this.repeat = "";
  this.emailError = "";
  this.passwordError = "";
  this.nameError = "";
  this.phoneError = "";
  this.repeatError = "";
  this.emailCorrect = "";
  this.passwordCorrect = "";
  this.nameCorrect = "";
  this.phoneCorrect = "";
  this.repeatCorrect = "";
  this.enableButton = false;
  }

  register = async() => {
    console.log("register");
    const user = {name: this.name, email:this.email, phone:this.phone, password:this.password}
    const feedback = await rootStore.uiStore.registerUser(user);
    console.log(feedback);
    this.checkFeedback(feedback);
  }

  checkFeedback(feedback){
  if (feedback === "auth/email-already-in-use"){
      this.emailCorrect = "";
      this.emailError = "(☝◞‸◟)☞ Email already in use!";
  }
  }

  putonNull(value){
   if (value === "name"){
       this.nameCorrect = "";
       this.nameError = "";
   }
   if (value === "email"){
    this.emailCorrect = "";
    this.emailError = "";
}
if (value === "phone"){
    this.phoneCorrect = "";
    this.phoneError = "";
}
if (value === "password"){
    this.passwordCorrect = "";
    this.passwordError = "";
}
if (value === "repeat"){
    this.repeatCorrect = "";
    this.repeatError = "";
}
  }

  checkfields(){
  if (this.email !== ""){
  if (this.email.includes("@"))
  this.emailCorrect = `This works ٩(^ᴗ^)۶`
  else{
  console.log("error")
  this.emailError = ` (☝◞‸◟)☞ This might not be an email`
  }
  }

  if (this.name !== ""){
  if (this.name.length > 5)
  this.nameCorrect = `Lookin Cool today! ◕‿↼`
  else{
    this.nameError = ` (☝◞‸◟)☞ a little too short no ?`
  }
  }
  if (this.phone !== ""){
    if (this.phone.length >= 10){
    this.phoneCorrect = `You're real number? Lucky me ♡(ŐωŐ人)`
    }
    else{
    this.phoneError = `(☝◞‸◟)☞ a false number? unlucky me !`
    }
  }
  if (this.password !== ""){
    if (this.password.length > 8){
    this.passwordCorrect = "Password secure (✿╹◡╹)"
    }
    else {
    this.passwordError = "(☝◞‸◟)☞ needs 8+ characters"
    }
  }
  if (this.repeat !== ""){
    if (this.passwordCorrect === ""){
    this.repeatError = "(☝◞‸◟)☞ ↑ no password to repeat ↑ "
    }
    else if (this.password !== this.repeat){
        this.repeatError = "(☝◞‸◟)☞ ↑ doesnt match ↑ "
    }
    else{
    this.repeatCorrect= "Matches ! (✿╹◡╹)"
    }
}
this.checkEnable();
}
   


  checkEnable(){
      this.enableButton = true;
      if (this.emailCorrect !== "" && this.nameCorrect !== "" && this.passwordCorrect !== "" && this.phoneCorrect !== "" && this.repeatCorrect !== "" ){
      this.enableButton = true;
      }
      else{
        this.enableButton = false;
      }
      }
  
 
  
}

decorate(RegisterStore, {
  checkEnable: action,
  nameCorrect: observable,
  nameError: observable,
  emailCorrect: observable,
  emailError: observable,
  phoneCorrect: observable,
  phoneError: observable,
  passwordError: observable,
  passwordCorrect: observable,
  repeatCorrect: observable,
  repeatError: observable,
  checkfields: action,
  enableButton:observable,
  checkFeedback: action,
  putonNull: action,
  login:action
});

const registerStore = new RegisterStore();
export{registerStore};
export default RegisterStore;
