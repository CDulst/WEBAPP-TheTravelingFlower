import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../UiStore'

function Landing() {
    useEffect(() => {
        uiStore.setPage("landing")
      });
  return (
  <>
  <p> Landings page </p>
  <Link to = {ROUTES.tracker}> Go to Tracker  </Link>
  </>
  );
}

export default Landing;
