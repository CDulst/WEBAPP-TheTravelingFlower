import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore'

function Carriers() {
    useEffect(() => {
        uiStore.setPage("carriers")
      });
  return (
  <>
  <p> Carriers page </p>
  <Link to = {ROUTES.apply}> Go to apply </Link>
  </>
  );
}

export default Carriers;
