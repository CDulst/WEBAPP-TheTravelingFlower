import { decorate, observable, action } from "mobx";
import {rootStore} from "../../../../stores/index";


class PersonalStore{
  constructor() {
  this.name = "";
  this.email = "";
  this.identification = "";
  this.age = "";
  this.route = ""
  this.nameError = "";
  this.emailError= "";
  this.identificationError = "";
  this.ageError = "";
  this.nameCorrect= false;
  this.emailCorrect = false;
  this.identificationCorrect = false;
  this.ageCorrect= false;
  this.enableButton = false;
  }


   
  putonNull(value){
    if (value === "name"){
        this.nameCorrect = false;
        this.nameError = "";
    }
    if (value === "email"){
     this.emailCorrect = false;
     this.emailError = "";
 }
 if (value === "identification"){
     this.identificationCorrect = false;
     this.identificationError = "";
 }
 if (value === "age"){
     this.ageCorrect = false;
     this.ageError = "";
 }
 
   }

  checkfields(){
    if (this.email !== ""){
        if (!this.email.includes("@")){
        console.log("error")
        this.emailError = ` (☝◞‸◟)☞ This might not be an email?`
        }
        else{
        this.emailCorrect = true;
        console.log("correct");
        }
    }


    if (this.name !== ""){
        if (this.name.length < 5){
        console.log("error")
        this.nameError = ` (☝◞‸◟)☞ a little too short no?`
        }
        else{
        this.nameCorrect = true;
        console.log("correct");
            }
    }
    if (this.identification !== ""){
        if (this.identification.length !== 15){
        console.log("error")
        this.identificationError = `(☝◞‸◟)☞ this isn't a valid identification number`
        }
        else{
        this.identificationCorrect = true;
        console.log("correct");  
        }
    }
    if (this.age !== ""){
        if (this.age.length !== 2 || isNaN(this.age)){
        console.log("error")
        this.ageCorrect = `(☝◞‸◟)☞ this isn't a valid age`
        }
        else{
            this.ageCorrect = true;
            console.log("correct");  
            }
    }
  }

  change(target,value){
    this[target] = value;
  }
  

  checkEnable(){
 
      if (this.name !== "" && this.email !== ""  && this.identification !== "" && this.age !== ""){

      if (this.nameError === "" && this.emailError === ""  && this.identificationError === "" && this.ageError=== ""){
          this.enableButton = true;
      }
      else{
          this.enableButton = false;
      }
  }
}

} 


decorate(PersonalStore, {
    checkEnable: action,
    name: observable,
    email: observable,
    change:action,
    age:observable,
    route:observable,
    identification: observable,
    checkfields: action,
    putonNull:action,
    nameError: observable,
    emailError: observable,
    identificationError: observable,
    ageError: observable,
    enableButton: observable,
    nameCorrect: observable,
    emailCorrect: observable,
    ageCorrect: observable,
    identificationCorrect: observable
});


const personalStore = new PersonalStore();
export {PersonalStore};
export default personalStore;
