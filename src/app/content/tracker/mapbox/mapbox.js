import React, { useState } from 'react';
import ReactMapboxGl, {Layer, Feature ,Image, Popup} from 'react-mapbox-gl';
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
import UiStore from '../../../../stores/UiStore';

const store = new DataStore();

const Map = ReactMapboxGl({

  
    
    accessToken:
      'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
      
      minZoom: [2.7]
  });


const Mapbox = () => {

    const {routeStore, carrierStore} = useStore();
    const [checkpoints, setCheckpoints] =useState(null);
    const [carrierLocation, setCarrierLocation] = useState();
    store.calculatePoints();
    const [viewport] = useState({
        containerStyle:{
            height: '100vh',
            width: '100vw'
                },
            zoom: [4],
            pitch:[60]
          
        })

        if(checkpoints) {
            let selectedCarrier = carrierStore.findCarrierById(checkpoints.carrierId);
            uiTracker.setSelectedCarrier(selectedCarrier);
        }

    

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


                <Layer onMouseEnter={e => {setCheckpoints(checkpoint)}} onMouseLeave={e=>{setCheckpoints(null)}} id="marker" id={checkpoint.id} layout={{"icon-image": "marker-icon", "icon-size": 0.8, "icon-ignore-placement": true }}   key={checkpoint.distance}  >
                    <Feature coordinates={[checkpoint.startCoordinate.Rc, checkpoint.startCoordinate.Ac]}></Feature>
                </Layer>   
                </>
                ))}

            {checkpoints && uiTracker.selectedCarrier ? ( 
        
                <Popup coordinates={[checkpoints.startCoordinate.Rc, checkpoints.startCoordinate.Ac]}>
                   <h1>{uiTracker.selectedCarrier.name}</h1>
                   <div className={style.personalInformation}>
                   <img src={uiTracker.selectedCarrier.pic} className={style.popUpAvatar} alt={`${uiTracker.selectedCarrier.name}`}></img>
                   <div className={style.righterpopup}>
                   <p>{uiTracker.selectedCarrier.name}</p>
                   <p>{uiTracker.selectedCarrier.age}</p>
                    <p>{uiTracker.selectedCarrier.transport}</p>
                   <img className={style.popupFlag} src={uiTracker.selectedCarrier.flag} alt="flag"></img>
                   </div>
                   </div>

               </Popup> 
               ) : null}
            {checkpoints && !uiTracker.selectedCarrier ? (
                    <Popup coordinates={[checkpoints.startCoordinate.Rc, checkpoints.startCoordinate.Ac]}>
                            <h1>Carrier still needs to be decided</h1>
                    </Popup>  
            ) : null
        }  

            </Map>
        </div>
        </>
    
    ));
};

export default Mapbox;