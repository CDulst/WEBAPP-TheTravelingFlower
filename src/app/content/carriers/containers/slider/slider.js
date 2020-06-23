import React, {useState} from 'react';
import style from './slider.module.css'
import InvolvementSlider from '../../../challenge/components/involvementSlider/involvementSlider';
import person from '../../../../../assets/carrier/carrier.png'
import { useStore } from '../../../../../hooks';
import {uiStoreCarriers} from '../../stores/UiStore';
import { rootStore } from '../../../../../stores';
import question from "../../../../../assets/question.svg"
import CarrierStore from '../../../../../stores/CarrierStore';



function Slider() {
  const {carrierStore, routeStore} = useStore();


  const [selectedCarrier, setSelectedCarrier] = useState(null)
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [routeArray, setArray] = useState(null);

  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue);
   

   
    let routeArray = [];
    for (let i = 1; i<= rootStore.routeStore.routes.length; i++){
      let rout = rootStore.routeStore.routes.find(route => route.sorted === i);
      routeArray.push(rout);
    }

    setArray(routeArray);
    const r = Math.round(value/100*routeStore.routes.length)
    
    const route = routeArray[r];

    console.log(r);

    

    console.log(route)
    setSelectedRoute(route);

    if(route) {
    setSelectedCarrier(carrierStore.findCarrierById(route.carrierId))
    }
  }
  


    uiStoreCarriers.setSelectedRoute(selectedRoute);
    uiStoreCarriers.setSelectedCarrier(selectedCarrier);

    let routeposition = ""

    if (selectedRoute){
      routeposition = routeArray.indexOf(selectedRoute);
      console.log("works")
    }
    else{
      console.log("not work");
    }

   
    

 
  return (
  <>

    <div className={style.slider}>
    <div className={style.carriers}>
      <img src={routeposition != "" && routeArray[routeposition + 2]  && carrierStore.findCarrierById(routeArray[routeposition + 2].carrierId) ? carrierStore.findCarrierById(routeArray[routeposition + 2].carrierId).pic : `https://avatars.dicebear.com/v2/identicon/unknown.svg` } className={style.secondNextCarrier} alt="person"></img>
      <img src={routeposition != "" && routeArray[routeposition + 1]  && carrierStore.findCarrierById(routeArray[routeposition + 1 ].carrierId) ? carrierStore.findCarrierById(routeArray[routeposition+ 1].carrierId).pic : `https://avatars.dicebear.com/v2/identicon/unknown.svg`  } className={style.nextCarrier} alt="person"></img>
      <img src={(selectedRoute && carrierStore.findCarrierById(selectedRoute.carrierId) ? carrierStore.findCarrierById(selectedRoute.carrierId).pic : `https://avatars.dicebear.com/v2/identicon/unknown.svg`)} className={style.currentCarrier} alt="person"></img>
      <img src={routeposition != "" && routeArray[routeposition - 1]  && carrierStore.findCarrierById(routeArray[routeposition - 1].carrierId) ? carrierStore.findCarrierById(routeArray[routeposition - 1].carrierId).pic : `https://avatars.dicebear.com/v2/identicon/unknown.svg`  } className={style.nextCarrier} alt="person"></img>
      <img src={routeposition != "" && routeArray[routeposition - 2]  && carrierStore.findCarrierById(routeArray[routeposition - 2].carrierId) ? carrierStore.findCarrierById(routeArray[routeposition - 2].carrierId).pic : `https://avatars.dicebear.com/v2/identicon/unknown.svg` } className={style.secondNextCarrier} alt="person"></img>
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