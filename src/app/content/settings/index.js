import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import Account from "./containers/account/account";
import Logout from './containers/logout/logout';
import style from './index.module.css';

function Settings() {
    useEffect(() => {
        uiStore.setPage("settings")
      });
  return (
  <>
  <div className = {style.container}>
  <div className = {style.wrapper}>

  <h2 className = {style.title}> Settings</h2>
  <Account />

  <Logout/>
  </div>
  </div>
  </>
  );
}

export default Settings;
