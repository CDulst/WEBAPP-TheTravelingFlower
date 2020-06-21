import React, {useState} from 'react';
import style from './slider.module.css'
import InvolvementSlider from '../../../challenge/components/involvementSlider/involvementSlider';
import person from '../../../../../assets/carrier/carrier.png'
import { useStore } from '../../../../../hooks';
import {uiStoreCarriers} from '../../stores/UiStore';



function Slider() {
  const {carrierStore, routeStore} = useStore();

  const [selectedCarrier, setSelectedCarrier] = useState(null)
  const [selectedRoute, setSelectedRoute] = useState(null);

  const [value, setValue] = useState(80)

  const handleChange = (e, newValue) => {
    setValue(newValue);
    const r = value/100*routeStore.routes.length
    const route = routeStore.routes[r];

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
      <InvolvementSlider value={value} handleChange={handleChange} orientation="vertical" height="80vh" />
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