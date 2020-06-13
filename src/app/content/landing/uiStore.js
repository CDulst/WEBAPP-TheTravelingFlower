import React from 'react';
import {observable,action,decorate,configure} from "mobx"



class UILanding {
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

decorate(UILanding,{
 uiOut: observable,
 UIOut: action,
 UIIn: action
});

configure({enforceActions: 'observed'});

const uiLanding = new UILanding
export default uiLanding;