import React from 'react';
import {Link} from "react-router-dom";
import Setting from "../setting/setting";
import Logout from "../logout/logout";
import profileExample from "../../../../../assets/settings/profileExample.svg";
import style from "./account.module.css";

function Account() {
  return (
  <>
  <div className = {style.container}>
  <img src = {profileExample} className = {style.profile} alt = "profile"/>
  <div className = {style.settings}>
  <Setting title = "Full name" value = "Tom Verscheure"/>
  <Setting title = "Full name" value = "Tom Verscheure"/>
  <Setting title = "Full name" value = "Tom Verscheure"/>
  <Setting title = "Full name" value = "Tom Verscheure"/>
  </div>
  </div>
  </>
  );
}

export default Account;