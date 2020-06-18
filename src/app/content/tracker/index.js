import React from 'react';
import {useEffect} from 'react';
import uiStore from '../../../UiStore.js'
import Mapbox from './mapbox/mapbox'

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
