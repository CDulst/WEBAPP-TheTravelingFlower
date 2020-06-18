import React from 'react';
import {Link} from "react-router-dom";
import style from './slider.module.css'
import InvolvementSlider from '../../../challenge/components/involvementSlider/involvementSlider';
import person from '../../../../../assets/carrier/carrier.png'



function Slider({onchange}) {
  return (
  <>
    <div className={style.slider}>
    <div className={style.carriers}>
      <img src={person} className={style.secondNextCarrier} alt="person"></img>
      <img src={person} className={style.nextCarrier} alt="person"></img>
      <img src={person} className={style.currentCarrier} alt="person"></img>
      <img src={person} className={style.nextCarrier} alt="person"></img>
      <img src={person} className={style.secondNextCarrier} alt="person"></img>
    </div>
    <div className={style.sliderComponent}>
      <div className={style.desktop}>
      <InvolvementSlider direction="desktop" height="60vh" />
      </div>
      <div className={style.mobile}>
      <InvolvementSlider direction="mobile"/>
      </div>
    </div>
    </div>
  </>
  );
}

export default Slider;