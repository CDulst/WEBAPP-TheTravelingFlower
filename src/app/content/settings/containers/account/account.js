import React from 'react';
import Setting from "../setting/setting";
import profileExample from "../../../../../assets/settings/profileExample.svg";
import style from "./account.module.css";
import {rootStore} from "../../../../../stores/index";
import { useObserver } from 'mobx-react-lite';

function Account() {
  return useObserver(() =>(
  <>
  <div className = {style.container}>
  <img src = {rootStore.uiStore.currentUser.avatar} className = {style.profile} alt = "profile"/>
  <div className = {style.settings}>
  <Setting title = "Full Name" value = {rootStore.uiStore.currentUser.name} edit = "name"/>
  <Setting title = "Phone Number" value = {rootStore.uiStore.currentUser.phonenumber} edit = "phonenumber"/>
  
  </div>
  </div>
  </>
  ));
}

export default Account;