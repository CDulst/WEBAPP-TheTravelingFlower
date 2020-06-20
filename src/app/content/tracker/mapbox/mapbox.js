import React, { useState } from 'react';
import ReactMapboxGl, {Layer, Feature ,Image} from 'react-mapbox-gl';
import DonationCounter from './donationCounter/DonationCounter'
import style from './mapbox.module.css';
import ProgressbarLocation from './ProgressLocation/ProgressLocation';
import Livechat from './Livechat/Livechat';
import PopupIcon from '../../../components/popupIcon/popupIcon'
import message from '../../../../assets/icons/message_white.svg'
import info from '../../../../assets/icons/info.svg'
import uiTracker from "../stores/uiStore"
import {useStore} from '../../../../hooks/index';
import {useObserver} from 'mobx-react-lite';
import DataStore from '../stores/DataStore';
import someImage from './Image';
import markerSrc from '../../../../assets/tracker/marker.svg'

const store = new DataStore();

const Map = ReactMapboxGl({

  
    
    accessToken:
      'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
      
      minZoom: [2.7]
  });


const Mapbox = () => {

   const {routeStore} = useStore();

   store.calculatePoints();
    const [carrierLocation, setCarrierLocation] = useState();


    const [viewport] = useState({
        containerStyle:{
            height: '100vh',
            width: '100vw'
                },
            zoom: [4],
            pitch:[60]
          
        })
        const handleOnClick = (e) => {
            uiTracker.UIOut();
          }
    

          return useObserver(() => (
        
        <>
        <div className={style.secondContainer}>

        
            <div className={style.donationCounter}>
            <DonationCounter />
            </div>

            <div className={style.progressbarLocation}>
                <ProgressbarLocation  />
            </div>

            <div className={style.iconMessage}>
                <PopupIcon icon={message} direction="-1" click = {handleOnClick} />
            </div>

            <div className={style.iconInfo}>
                <PopupIcon icon={info} />
            </div>

            <div className={style.livechat}>
            <Livechat />
            </div>
            
            <Map {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb">

                <Image id={"marker-icon"} url={"https://upload.wikimedia.org/wikipedia/commons/2/28/Marker76887687.png"}></Image>
                
                {routeStore.routes.map(checkpoint => (

                <>

                <Layer id="marker" id={checkpoint.id} layout={{"icon-image": "marker-icon", "icon-size": 0.6 }}   key={checkpoint.distance}  >
                    <Feature coordinates={[checkpoint.startCoordinate.Rc, checkpoint.startCoordinate.Ac]}></Feature>
                </Layer>   
                </>
                ))}

            </Map>
        </div>
        </>
    
    ));
};

export default Mapbox;