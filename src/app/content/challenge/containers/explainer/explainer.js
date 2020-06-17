import React from 'react';
import {Link} from "react-router-dom";
import style from './explainer.module.css';
import Involvement from '../involvement/involvement';
import InvolvementSlider from '../../components/involvementSlider/involvementSlider';
import Button from '../../../../components/button/button';
import SocialFeed from '../socialfeed/socialfeed';



function Explainer() {
  return (
  <>
  <div className={style.explainer}>
    <div className={style.dynamicText}>
    <p className={style.dynamicText1}>Challenge completion = low</p>
    <p className={style.dynamicText2}>Donation count decreases</p>
    </div>

    <Involvement />
  <div className={style.sliderWrapper}>
    <div className={style.slider}>
    <InvolvementSlider item1="low" item2="high" text="community involvement" />
  </div>
    
    </div>
    <div className={style.button__explainer}>
    <Button value="I GOT IT!" type="" />
    </div>
  </div>
  <div className={style.socialfeed}>
  <SocialFeed />
  </div>
  </>
  );
}

export default Explainer;