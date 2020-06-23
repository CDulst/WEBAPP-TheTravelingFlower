import {observable,action,decorate,configure} from "mobx"



class UIApply{
  constructor(){
  this.currentStep = "";
  }
  
  setCurrentStep(value){
  this.currentStep = value;
  }

}

decorate(UIApply,{
 currentStep: observable,
 setCurrentStep: action
});

configure({enforceActions: 'observed'});

const uiApply= new UIApply();
export default uiApply;