import React, {useState} from 'react';
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
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';

import carrierPhoto from '../../../assets/feed/post/content pics/example.png'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
    
    minZoom: [2.7]
});

function Carriers() {

  const [viewport] = useState({
    zoom: [4],
    pitch:[60]
  
})
    useEffect(() => {
        uiStore.setPage("carriers")
      });
  return (
  <>
  <Switch>
  <Route path = "/carriers/detail">
  <div className={style.containerDetail}>
  <Map className={style.mapbox3} {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb"/>
  <TimeLine backgroundColor="white" indicatorColor="white" carrierPhoto={pic} date="2020 - present 19u20" />
  </div>
  
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
