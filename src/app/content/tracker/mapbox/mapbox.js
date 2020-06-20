import React, { useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
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
import {rootStore } from '../../../../stores/index';
import {useEffect} from "react";


const Map = ReactMapboxGl({

  
    
    accessToken:
      'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
      
      minZoom: [2.7]
  });


const Mapbox = () => {
   
 
    

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
        {
  
            rootStore.routeStore.routes.forEach(route => {
            console.log(route);
            })
           
            
            
        }
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
            
            <Map {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb"/>
           
            
        </div>
        </>
    
    ));
};

export default Mapbox;