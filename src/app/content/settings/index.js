import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore'

function Settings() {
    useEffect(() => {
        uiStore.setPage("settings")
      });
  return (
  <>
  <h2> Setting </h2>
  
  </>
  );
}

export default Settings;
