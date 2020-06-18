import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import {Route,Switch} from "react-router-dom";
import ChallengeText from '../challenge/components/challengeText/challengeText';
import icon from '../../../assets/challenge/flag.svg'
import flag from "../../../assets/challenge/flag.svg";
import Slider from './containers/slider/slider';
import style from './index.module.css'
import TimeLine from './containers/timeline/timeline';
import Discover from './containers/discover/discover';
import Profile from './containers/profile/profile'
import pic from '../../../assets/carrier/carrier.png'

function Carriers() {
    useEffect(() => {
        uiStore.setPage("carriers")
      });
  return (
  <>
  <Switch>
  <Route path = "/carriers/detail">
  <p> detail </p>
  </Route>
  <Route path = "/carriers">
  <div className={style.carrier__container}>
    <Discover/>
    <Profile pic={pic} name="John Boss" flag={flag} age="12" transport="Bike" bio="I am john and I love nature. I am a young nature activist and I like to spend time in my garden. I hate my life and my wife. please kill me I dont want to particpate in this" />
    <div className={style.sliderPosition}>
    <Slider />
    </div>
  </div>
  </Route>
  </Switch>
  </>
  );
}

export default Carriers;
