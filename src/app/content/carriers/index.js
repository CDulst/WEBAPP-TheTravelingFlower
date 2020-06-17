import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import ChallengeText from '../challenge/components/challengeText/challengeText';
import icon from '../../../assets/challenge/flag.svg'
import flag from "../../../assets/challenge/flag.svg";
import Slider from './containers/slider/slider';
import style from './index.module.css'
import TimeLine from './containers/timeline/timeline';
import Discover from './containers/discover/discover';

function Carriers() {
    useEffect(() => {
        uiStore.setPage("carriers")
      });
  return (
  <>
  <div className={style.carrier__container}>
    
  </div>
  </>
  );
}

export default Carriers;
