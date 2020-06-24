import { decorate, observable, action } from "mobx";
import {rootStore} from "../../../../stores/index";


class AdresStore{
  constructor() {
  this.streetname = "";
  this.streetnr = "";
  this.postalcode = "";
  this.country = "";
  this.streetError = "";
  this.nrError= "";
  this.postalError = "";
  this.countryError = "";
  this.streetCorrect = "";
  this.nrCorrect= "";
  this.postalCorrect = "";
  this.countryCorrect = "";
  }


   
  putonNull(value){
    if (value === "streetname"){
        this.streetCorrect = false;
        this.streetError = "";
    }
    if (value === "streetnr"){
     this.nrCorrect = false;
     this.nrError = "";
 }
 if (value === "postalcode"){
     this.postalCorrect = false;
     this.postalError = "";
 }
 if (value === "country"){
     this.countryCorrect = false;
     this.countryError = "";
 }
  }

  checkfields(){
    if (this.streetnr !== ""){
        if (this.age.length > 3 || isNaN(this.streetnr)){
        console.log("error")
        this.emailError = ` (☝◞‸◟)☞ this is not a street number`
        }
    }
    if (this.streetname !== ""){
        if (this.name.length < 3){
        console.log("error")
        this.emailError = ` (☝◞‸◟)☞ a little too short no?`
        }
    }
    if (this.postalcode!== ""){
        if (this.postalcode.length != 4 || isNaN(this.postalcode)){
        console.log("error")
        this.emailError = `(☝◞‸◟)☞ this isn't a valid postalcode`
        }
    }
    if (this.country !== ""){
        if (this.country.length < 3){
        console.log("error")
        this.emailError = `(☝◞‸◟)☞ a little too short no?`
        }
    }
  }
  

  checkEnable(){
      this.enableButton = true;
      if (this.streetname !== "" && this.streetnr !== ""  && this.postalcode !== "" && this.country!== "")
      if (this.streetError === "" && this.nrError === ""  && this.postalError === "" && this.countryError === ""){
          this.enableButton = true;
      }
      else{
          this.enableButton = false;
      }
  }
 
  change(target,value){
    this[target] = value;
  }
  
  
}

decorate(AdresStore, {
  checkEnable: action,
  checkfields: action,
  putonNull:action,
  enableButton: observable,
  streetError: observable,
  nrError: observable,
  postalError: observable,
  countryError: observable,
  streetCorrect: observable,
  nrCorrect: observable,
  postalCorrect: observable,
  countryCorrect: observable,
  streetname: observable,
  streetnr: observable,
  postalcode: observable,
  country:observable


});

const adresStore = new AdresStore();
export{AdresStore};
export default adresStore;
