import React from 'react';
import Setting from "../setting/setting";
import profileExample from "../../../../../assets/settings/profileExample.svg";
import style from "./account.module.css";

function Account() {
  return (
  <>
  <div className = {style.container}>
  <img src = {profileExample} className = {style.profile} alt = "profile"/>
  <div className = {style.settings}>
  <Setting title = "Full Name" value = "Tom Verscheure" edit = "Name"/>
  <Setting title = "Phone Number" value = "+32488152680" edit = "Number"/>
  <Setting title = "Email" value = "Tom.Verscheure@gmail.com" edit = "Email"/>
  <Setting title = "Password" value = "*************" edit = "Password" />
  </div>
  </div>
  </>
  );
}

export default Account;