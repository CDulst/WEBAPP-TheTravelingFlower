import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import Switch from '../../components/switch/switch';
import InvolvementSlider from './components/involvementSlider/involvementSlider';
import Involvement from './containers/involvement/involvement';

function Challenge() {
    useEffect(() => {
        uiStore.setPage("challenge")
      });
  return (
  <>
  <div >
  <p> Challenge Page </p>
    
  </div>
  </>
  );
}

export default Challenge;
