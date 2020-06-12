import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../uiStore'

function Settings() {
    useEffect(() => {
        uiStore.setPage("settings")
      });
  return (
  <>
  <p> Settings page </p>
  <Link to = {ROUTES.landing}> Go to landing </Link>
  </>
  );
}

export default Settings;
