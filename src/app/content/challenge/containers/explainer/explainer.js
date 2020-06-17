import React from 'react';
import {Link} from "react-router-dom";
import style from './explainer.module.css';
import Involvement from '../involvement/involvement';
import InvolvementSlider from '../../components/involvementSlider/involvementSlider';



function Explainer() {
  return (
  <>
  <div className={style.explainer}>
    <p>Challenge completion low</p>
    <p>Donation count decreases</p>

    <Involvement />
    <InvolvementSlider />
    
  </div>
  </>
  );
}

export default Explainer;