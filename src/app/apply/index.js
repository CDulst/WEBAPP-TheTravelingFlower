import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../UiStore'

function Apply() {
    useEffect(() => {
        uiStore.setPage("apply")
      });
  return (
  <>
  <p> Apply page </p>
  <Link to = {ROUTES.tracker}> Go to tracker </Link>
  </>
  );
}

export default Apply;
