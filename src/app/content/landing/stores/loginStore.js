import { decorate, observable, action } from "mobx";
import {rootStore} from "../../../../stores/index";


class LoginStore {
  constructor() {
  this.email = ""
  this.password = ""
  this.emailError = ""
  this.passwordError = " "
  this.login();
  }

  login = async() => {
    const user = {email:this.email,password:this.password}
    console.log(await rootStore.uiStore.loginUser(user));
  }
 
  
}

decorate(LoginStore, {
  login:action
});

const loginStore = new LoginStore();
export{loginStore};
export default LoginStore;
