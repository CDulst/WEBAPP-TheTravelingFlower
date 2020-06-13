import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore.js'

function Tracker() {

    useEffect(() => {
        uiStore.setPage("tracker")
      });

  return (
  <>
  <p> Tracker page </p>
  <Link to = {ROUTES.apply}> Go to apply </Link>
  </>
  );
}

export default Tracker;
