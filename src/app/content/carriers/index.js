import React, {useState} from 'react';
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import {Route,Switch, Link} from "react-router-dom";
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
import { useStore } from '../../../hooks';
import Button from '../../components/button/button';
import bike from '../../../assets/apply/Bike.svg'

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
  return useObserver(() => (
  <>
  <Switch>
  <Route path = "/carriers/detail/:id">
  
  <div className={style.containerDetail}>
  <Map className={style.mapbox3} {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb"/>
  <h2 className={style.detailTitle}>{`title Journey`}</h2>
  <TimeLine backgroundColor="white" indicatorColor="white" carrierPhoto="something" date="Hello test" borderTop="3px" />
  </div>
  

  
  </Route>
  <Route path = "/carriers">
  <div className={style.carrier__container}>
    <Discover/>
    {uiStoreCarriers.selectedCarrier ? (
      <Profile pic={uiStoreCarriers.selectedCarrier.pic} name={uiStoreCarriers.selectedCarrier.name} flag={uiStoreCarriers.selectedCarrier.flag} age={uiStoreCarriers.selectedCarrier.age} transport={uiStoreCarriers.selectedCarrier.transport} bio={uiStoreCarriers.selectedCarrier.bio} />
    ): 
    <div className={style.noCarrierSelected}>
    
    {uiStoreCarriers.selectedRoute ? (
      <div className={style.noCarrier__container}>
      <img src={bike}></img>
    <p className={style.noCarrier__text}>There hasn't been a carrier selected for this location: <span className={style.pink__text}> {uiStoreCarriers.selectedRoute.startName} to {uiStoreCarriers.selectedRoute.endName} </span> </p>
      <Link to={`/apply`}><Button value="Become a carrier"/></Link>
      </div>
    ) : null}
   
    
    {!uiStoreCarriers.selectedRoute ? (
      <p className={style.sliderFeedback}>USE THE SLIDER!</p>
    ) : null}
    </div>
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
