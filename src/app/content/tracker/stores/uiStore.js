
import {observable,action,decorate,configure} from "mobx"



class UITracker {
  constructor(){
  this.uiOut = false;
  this.selectedCarrier = undefined;

  this.popup = false;
  }

  setSelectedCarrier (carrier) {
    this.selectedCarrier = carrier;
  }

  popupOut () {
    this.popup = true;
  }

  popupIn () {
    this.popup = false;
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
 UIIn: action,
 popup: observable,
 popupIn: action,
 popupOut: action
});

configure({enforceActions: 'observed'});

const uiTracker = new UITracker()
export default uiTracker;