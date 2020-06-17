import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import Switch from '../../components/switch/switch';

function Challenge() {
    useEffect(() => {
        uiStore.setPage("challenge")
      });
  return (
  <>
  <div className="challenge__container">
  <p> Challenge Page </p>
 
  </div>
  </>
  );
}

export default Challenge;
