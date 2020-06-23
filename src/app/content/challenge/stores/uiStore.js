import {observable,action,decorate,configure} from "mobx"



class UIChallenge {
  constructor(){
  this.uiOut = false;
  this.TextOut = true;
  }

  textOut() {
    this.TextOut = true;
  }

  textIn() {
    this.TextOut = false;
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
 UIIn: action,
 TextOut: observable,
 textIn: action,
 textOut: action
});

configure({enforceActions: 'observed'});

const uiChallenge = new UIChallenge()
export default uiChallenge;