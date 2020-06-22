import React, {useState} from 'react';
import style from './slider.module.css'
import InvolvementSlider from '../../../challenge/components/involvementSlider/involvementSlider';
import person from '../../../../../assets/carrier/carrier.png'
import { useStore } from '../../../../../hooks';
import {uiStoreCarriers} from '../../stores/UiStore';
import { rootStore } from '../../../../../stores';



function Slider() {
  const {carrierStore, routeStore} = useStore();


  const [selectedCarrier, setSelectedCarrier] = useState(null)
  const [selectedRoute, setSelectedRoute] = useState(null);

  const [value, setValue] = useState(100)

  const handleChange = (e, newValue) => {
    setValue(newValue);
    const r = value/100*routeStore.routes.length

    if(uiStoreCarriers.selectedCarrier){
      console.log(uiStoreCarriers.selectedCarrier)
    }
   
    let routeArray = [];
    for (let i = 1; i<= rootStore.routeStore.routes.length; i++){
      let rout = rootStore.routeStore.routes.find(route => route.sorted === i);
      routeArray.unshift(rout);
    }
    
    console.log(routeArray);
    
    const route = routeArray[r];
    setSelectedRoute(route);

    if(route) {
    setSelectedCarrier(carrierStore.findCarrierById(route.carrierId))
    }
  }
  


    uiStoreCarriers.setSelectedRoute(selectedRoute);
    uiStoreCarriers.setSelectedCarrier(selectedCarrier);
    
  

 
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
      <InvolvementSlider item1={(uiStoreCarriers.selectedRoute ? (`${uiStoreCarriers.selectedRoute.startName}-${uiStoreCarriers.selectedRoute.endName}`) : null)} value={value} handleChange={handleChange} orientation="vertical" height="80vh" />
      </div>
      <div className={style.mobile}>
      <InvolvementSlider  value={value} handleChange={handleChange} orientation="horizontal"/>
      </div>
    </div>
    </div>
  </>
  );
}

export default Slider;