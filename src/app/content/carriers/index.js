import React, {useState} from 'react';
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import {Route,Switch} from "react-router-dom";
import flag from "../../../assets/challenge/flag.svg";
import Slider from './containers/slider/slider';
import style from './index.module.css'
import TimeLine from './containers/timeline/timeline';
import Discover from './containers/discover/discover';
import Profile from './containers/profile/profile'
import pic from '../../../assets/carrier/carrier.png'
import ReactMapboxGl from 'react-mapbox-gl';
import {uiStoreCarriers} from './stores/UiStore';
import { useObserver } from 'mobx-react-lite';


const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
    
    minZoom: [2.7]
});

function Carriers() {

  console.log(uiStoreCarriers);

  const [viewport] = useState({
    zoom: [4],
    pitch:[60]
  
})
    useEffect(() => {
        uiStore.setPage("carriers")
      });
  return useObserver(() => (
  <>
  <Switch>
  <Route path = "/carriers/detail">
  <div className={style.containerDetail}>
  <Map className={style.mapbox3} {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb"/>
  <h2 className={style.detailTitle}>Tom's Journey</h2>
  <TimeLine backgroundColor="white" indicatorColor="white" carrierPhoto={pic} date="Hello test" borderTop="3px" />
  </div>
  
  </Route>
  <Route path = "/carriers">
  <div className={style.carrier__container}>
    <Discover/>
    {uiStoreCarriers.selectedCarrier ? (
      <Profile pic={uiStoreCarriers.selectedCarrier.pic} name={uiStoreCarriers.selectedCarrier.name} flag={uiStoreCarriers.selectedCarrier.flag} age={uiStoreCarriers.selectedCarrier.age} transport="Bike" bio="I am john and I love nature. I am a young nature activist and I like to spend time in my garden. I hate my life and my wife. please kill me I dont want to particpate in this" />
    ): 
    <p>carrier still not picked</p>
    }
    
    <div className={style.sliderPosition}>
    <Slider />
    </div>
  </div>
  </Route>
  </Switch>
  </>
  ));
}

export default Carriers;
