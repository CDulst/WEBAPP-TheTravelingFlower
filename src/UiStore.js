import React from 'react';
import {observable,action,decorate,configure} from "mobx"



class UIStore {
  constructor(){
  this.activeUser = "";
  this.activePage = "";
  this.sidebarActive = true;
  }

  setUser = (user) => {
      this.activeUser = user;
  }

  setPage = (page) => {
      this.activePage = page
      console.log(this.activePage);
      if (this.activePage === "landing" || this.activePage === "apply"){
          this.sidebarActive = false;
      }
      else{
          this.sidebarActive = true;
      }
  }

}





decorate(UIStore,{
 activePage: observable,
 activeUser: observable,
 sidebarActive: observable,
 setPage: action,
 setUser: action
});

configure({enforceActions: 'observed'});

const uiStore = new UIStore();
export default uiStore;