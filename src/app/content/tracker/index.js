import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore.js'
import Mapbox from './mapbox/mapbox'
import style from './index.module.css'

function Tracker() {

    useEffect(() => {
        uiStore.setPage("tracker")
      });

  return (
  <>
  <Mapbox />
  </>
  );
}

export default Tracker;
