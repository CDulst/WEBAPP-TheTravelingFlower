
import {observable,action,decorate,configure} from "mobx"



class UITracker {
  constructor(){
  this.uiOut = false;
  this.selectedCarrier = undefined;
  }

  setSelectedCarrier (carrier) {
    this.selectedCarrier = carrier;
  }

  UIOut(){
      this.uiOut = true;
  }

  UIIn(){
      this.uiOut = false;
  }

}

decorate(UITracker,{
 uiOut: observable,
 UIOut: action,
 UIIn: action
});

configure({enforceActions: 'observed'});

const uiTracker = new UITracker()
export default uiTracker;