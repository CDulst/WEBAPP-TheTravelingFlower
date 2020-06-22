import React from 'react';
import {observable,action,decorate,configure} from "mobx"


class DonationController {
  constructor(root){
  this.currentdonation = "";
  this.livedonationSum = ""
  this.setswitch = true;
  this.leftSum = false;
  this.rightSum = false;
  this.toAddMoney = 0;
  this.changeStatic = 0;
  this.enabled = false;
  this.waitTime = 5;
  this.changed = false;
  this.EnableCounter();
  }
 
  EnableCounter(){
    setTimeout(() => {
      this.changeToAdd((this.livedonationSum - this.currentdonation).toFixed(2))
      this.donationCounter(this.toAddMoney);
      }, this.waitTime);
  }

  changeToAdd(value){
      this.toAddMoney = value;
  }

  changecurrent(current){
      this.currentdonation = current
  }

  changelive(live){
      this.livedonationSum = live;
  }

  setLeft(){
  this.changeLeftSum(true);
  this.changeStatic = this.toAddMoney;
  setTimeout(() => {
  this.changeLeftSum(false);
    }, 2000);
  }

  setRight(){
  this.changeRightSum(true);
  this.changeStatic = this.toAddMoney;
  console.log(this.rightSum);
  setTimeout(() => {
    this.changeRightSum(false);
  }, 2000);
  }

  changeRightSum(value) {
   this.rightSum = value;
  }

  changeLeftSum(value){
   this.leftSum = value
  }
  
  setSwitch(){
      if(this.setswitch){
          this.setLeft();
          this.setswitch = false;
      }
      else{
        this.setRight();
        this.setswitch = true;
      }
  }
  
  donationCounter(){
  if (this.toAddMoney > 0){
    if (!this.enabled){
    this.enabled = true
    this.setSwitch();
    }
    this.currentdonation += 0.01;

  }
  else{
    this.enabled = false;
    this.toAddMoney = 0;
  }
  this.EnableCounter();
  }

  
}
decorate(DonationController,{
currentdonation: observable,
changeStatic: observable,
livedonationSum: observable,
changeLeftSum: action,
changeToAdd: action,
changeRightSum: action,
leftSum: observable,
setRight: action,
setLeft: action,
rightSum: observable,
donationCounter: action,
setSwitch: action,
toAddMoney: observable,
addedMoney: observable,
changecurrent: action,
changelive: action,
waitTime: observable
})



export default DonationController;

