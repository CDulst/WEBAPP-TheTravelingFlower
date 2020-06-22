import React from 'react';
import {observable,action,decorate,configure} from "mobx"


class DonationController {
  constructor(root){
  this.currentdonation = "";
  this.livedonationSum = "";
  this.toAddMoney = 0;
  this.waitTime = 20;
  this.EnableCounter();
  }
 
  EnableCounter(){
    setTimeout(() => {
      this.toAddMoney = (this.livedonationSum - this.currentdonation).toFixed(2);
      this.donationCounter(this.toAddMoney);
      }, this.waitTime);
  }

  changecurrent(current){
      this.currentdonation = current
  }

  changelive(live){
      this.livedonationSum = live;
  }
  
  
  donationCounter(){
  if (this.toAddMoney > 0){
    this.currentdonation += 0.01;
    console.log(this.currentdonation.toFixed(2));
  }
  else{
    this.toAddMoney = 0;
  }
  this.EnableCounter();
  }

  
}
decorate(DonationController,{
currentdonation: observable,
livedonationSum: observable,
donationCounter: action,
toAddMoney: observable,
addedMoney: observable,
changecurrent: action,
changelive: action,
waitTime: observable
})



export default DonationController;

