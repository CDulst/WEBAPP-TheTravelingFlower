import React from 'react';
import {useEffect} from 'react';
import uiStore from '../../../UiStore.js'
import Mapbox from './mapbox/mapbox'
import { dataStore } from './stores/DataStore.js';


function Tracker() {

    useEffect(() => {
        uiStore.setPage("tracker")
      });

      if(uiStore.activePage !== "tracker") {
        dataStore.empty();
      }

   

  return (
  <>
  <Mapbox />
  </>
  );
}

export default Tracker;
