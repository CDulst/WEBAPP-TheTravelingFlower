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
import ReactMapboxGl, { Layer, Feature, Image } from 'react-mapbox-gl';
import {uiStoreCarriers} from './stores/UiStore';
import { useObserver } from 'mobx-react-lite';
import { useStore } from '../../../hooks';
import Button from '../../components/button/button';
import bike from '../../../assets/apply/Bike.svg'
import backArrow from '../../../assets/carrier/backarrow.svg'
import {BallBeat} from 'react-pure-loaders'
import Spinner from 'react-spinner-material';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
    
    minZoom: [2.7]
});


function Carriers() {
  if(uiStore.activePage === "carriers") {
    uiStoreCarriers.setSelectedCarrierFromTracker(undefined);
  }

  const {routeStore} = useStore()

  let routeByTracker = undefined
  if(uiStoreCarriers.selectedCarrierFromTracker) {
    const route = routeStore.findRouteById(uiStoreCarriers.selectedCarrierFromTracker.routeId);
    routeByTracker = route
  }

  


  const [viewport] = useState({
    zoom: [6],
    pitch:[60]
  
})
    useEffect(() => {
        uiStore.setPage("carriers")
      });
  return useObserver(() => (
  <>
  <Switch>
  <Route path = "/carriers/detail/:id">
  
  {uiStoreCarriers.selectedCarrierFromTracker ? (
      <div className={style.containerDetail}>
       <Link to="/tracker"> <img className={style.backArrow} src={backArrow} alt="backArrow"></img></Link>
      <Map center={[routeByTracker.startCoordinate.Rc, routeByTracker.startCoordinate.Ac]} className={style.mapbox3} {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb">
      <Image id={"marker-icon"} url={"https://upload.wikimedia.org/wikipedia/commons/2/28/Marker76887687.png"}></Image>
                <Layer id="marker" layout={{"icon-image": "marker-icon", "icon-size": 0.5, "icon-ignore-placement": true, "icon-offset": [0,-20] }}  id="jumpingCarrier">
                    <Feature coordinates={[routeByTracker.startCoordinate.Rc, routeByTracker.startCoordinate.Ac]}></Feature>
                </Layer>

                <Layer id="marker" layout={{"icon-image": "marker-icon", "icon-size": 0.5, "icon-ignore-placement": true, "icon-offset": [0,-20] }}  id="jumpingCarrier2">
                    <Feature coordinates={[routeByTracker.endCoordinate.Rc, routeByTracker.endCoordinate.Ac]}></Feature>
                </Layer>

                <Layer type="line" paint={{"line-color":"#104ccf", "line-width": 4, "line-opacity": 0.5}}>
                                <Feature coordinates={[[routeByTracker.startCoordinate.Rc, routeByTracker.startCoordinate.Ac], [routeByTracker.endCoordinate.Rc, routeByTracker.endCoordinate.Ac]]} />
                </Layer>
      </Map>
      <h2 className={style.detailTitle}>{`${uiStoreCarriers.selectedCarrierFromTracker.name} Journey`}</h2>
      {routeByTracker.status === "completed" ? (<p className={style.journeyCompleted}>This journey is completed</p>):  <div className={style.spinner}>
        <p className={style.updatesJourneys}>Stay tuned for more updates!</p>
        <Spinner size={120} spinnerColor={"#d54283"} spinnerWidth={2} visible={true} />
      </div>}
      
      <TimeLine backgroundColor="white" indicatorColor="white" carrierPhoto={uiStoreCarriers.selectedCarrierFromTracker.pic} date="Hello test" borderTop="3px" />
      </div>
  ) : null}

{uiStoreCarriers.selectedCarrier ? (
      <div className={style.containerDetail}>
        <Link to="/carriers"> <img className={style.backArrow} src={backArrow} alt="backArrow"></img></Link>
      <Map center={[uiStoreCarriers.selectedRoute.startCoordinate.Rc, uiStoreCarriers.selectedRoute.startCoordinate.Ac]} className={style.mapbox3} {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb">
      <Image id={"marker-icon"} url={"https://upload.wikimedia.org/wikipedia/commons/2/28/Marker76887687.png"}></Image>
                <Layer id="marker" layout={{"icon-image": "marker-icon", "icon-size": 0.5, "icon-ignore-placement": true, "icon-offset": [0,-20] }}  id="jumpingCarrier">
                    <Feature coordinates={[uiStoreCarriers.selectedRoute.startCoordinate.Rc, uiStoreCarriers.selectedRoute.startCoordinate.Ac]}></Feature>
                </Layer>

                <Layer id="marker" layout={{"icon-image": "marker-icon", "icon-size": 0.5, "icon-ignore-placement": true, "icon-offset": [0,-20] }}  id="jumpingCarrier2">
                    <Feature coordinates={[uiStoreCarriers.selectedRoute.endCoordinate.Rc, uiStoreCarriers.selectedRoute.endCoordinate.Ac]}></Feature>
                </Layer>

                <Layer type="line" paint={{"line-color":"#104ccf", "line-width": 4, "line-opacity": 0.5}}>
                                <Feature coordinates={[[uiStoreCarriers.selectedRoute.startCoordinate.Rc, uiStoreCarriers.selectedRoute.startCoordinate.Ac], [uiStoreCarriers.selectedRoute.endCoordinate.Rc, uiStoreCarriers.selectedRoute.endCoordinate.Ac]]} />
                </Layer>
      </Map>
      <h2 className={style.detailTitle}>{`${uiStoreCarriers.selectedCarrier.name} Journey`}</h2>
      {uiStoreCarriers.selectedRoute.status === "completed" ? (<p className={style.journeyCompleted}>This journey is completed</p>):       <div className={style.spinner}>
        <p className={style.updatesJourneys}>Stay tuned for more updates!</p>
        <Spinner size={120} spinnerColor={"#d54283"} spinnerWidth={2} visible={true} />
      </div>}
      <TimeLine backgroundColor="white" indicatorColor="white" carrierPhoto={uiStoreCarriers.selectedCarrier.pic} date="Hello test" borderTop="3px" />
      </div>
  ) : null}



  

  
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
