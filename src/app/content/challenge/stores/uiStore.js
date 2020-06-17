import React from 'react';
import {observable,action,decorate,configure} from "mobx"



class UIChallenge {
  constructor(){
  this.uiOut = false;
  }

  UIOut(){
      this.uiOut = true;
  }

  UIIn(){
      this.uiOut = false;
  }

}

decorate(UIChallenge,{
 uiOut: observable,
 UIOut: action,
 UIIn: action
});

configure({enforceActions: 'observed'});

const uiChallenge = new UIChallenge()
export default uiChallenge;