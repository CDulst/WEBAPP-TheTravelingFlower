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
import {dataStore}from '../stores/DataStore';


const Map = ReactMapboxGl({

  
    
    accessToken:
      'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
      
      minZoom: [4.6]
  });


const Mapbox = () => {

    const {routeStore, carrierStore, uiStore} = useStore();
    const [checkpoints, setCheckpoints] =useState(null);
    const [currentCarrier, setCurrentCarrier] = useState(null)
    const [carrierLocation, setCarrierLocation] = useState();

    console.log(dataStore.trajectory)

    

   
    dataStore.calculatePoints();
    const [viewport] = useState({
        containerStyle:{
            height: '100vh',
            width: '100vw'
                },
            zoom: [3.5],
            pitch:[60],
            center:[6.0909, 52.52]
          
        })

        if(checkpoints) {
            let selectedCarrier = carrierStore.findCarrierById(checkpoints.carrierId);
            uiTracker.setSelectedCarrier(selectedCarrier);
        }

        uiStore.setCurrentCarrier(carrierStore.carriers[0]);

      

    

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
            
            <Map maxBounds={[-36.843834, 147.897897] [64.12321, -21.2342324]} movingMethod="flyTo" {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb">

                <Image id={"marker-icon"} url={"https://upload.wikimedia.org/wikipedia/commons/2/28/Marker76887687.png"}></Image>
                <Image id={"current-marker-icon"} url={"https://upload.wikimedia.org/wikipedia/commons/f/f6/Logosfsdfsdf.png"}></Image>
                

                <Layer  onMouseEnter={e => {setCurrentCarrier(uiStore.currentCarrier)}} onMouseLeave={e => {setCurrentCarrier(null)}} id="marker" layout={{"icon-image": "current-marker-icon", "icon-size": 0.5, "icon-ignore-placement": true, "icon-offset": [0,-20] }}  id="currentCarrier">
                    <Feature coordinates={[6.0909, 52.52]}></Feature>
                </Layer>

                {currentCarrier ? (
                    <Popup className={style.popupCurrent} coordinates={[6.0909, 52.52]}>
                        <div className={style.currentCarrier__container}>
                    
                        <img className={style.currentCarrierImage} src={currentCarrier.pic} alt="currentCarrier"></img>
                        <div className={style.currentCarrier__wrapper}>
                        <p>carrier: Tom</p>
                        <p>25 Km done</p>
                        </div>

                        <div className={style.currentCarrier__wrapper}>
                            <p>currentRoute:</p>
                            <p>Brussels-Amsterdam</p>
                        </div>

                        <p>25Km to go</p>
                        </div>
                    </Popup>
                ): null}


                {routeStore.routes.map(checkpoint => (

                <>

                <Layer onMouseEnter={e => {setCheckpoints(checkpoint)}} onMouseLeave={e=>{setCheckpoints(null)}} id="marker" id={checkpoint.id} layout={{"icon-image": "marker-icon", "icon-size": 0.8, "icon-ignore-placement": true, "icon-offset": [0,-20] }}   key={checkpoint.distance}  >
                    <Feature coordinates={[checkpoint.startCoordinate.Rc, checkpoint.startCoordinate.Ac]}></Feature>
                </Layer>   
                </>
                ))}

            {checkpoints ? (
             

                    <Layer type="line" paint={{"line-color":"#104ccf", "line-width": 4, "line-opacity": 0.5}}>
                            <Feature coordinates={[[checkpoints.startCoordinate.Rc, checkpoints.startCoordinate.Ac], [checkpoints.endCoordinate.Rc, checkpoints.endCoordinate.Ac]]} />
                    </Layer>
            ) : null}

            {checkpoints && uiTracker.selectedCarrier ? ( 
        
                <Popup className={style.containerPopup} coordinates={[checkpoints.startCoordinate.Rc, checkpoints.startCoordinate.Ac]}>
                   <h1 className={style.popupDestinations}>{`${checkpoints.startName}-${checkpoints.endName}`}</h1>
                   <div className={style.personalInformation}>
                   <img src={uiTracker.selectedCarrier.pic} className={style.popUpAvatar} alt={`${uiTracker.selectedCarrier.name}`}></img>
                   <div className={style.righterpopup}>
                   <p className={style.popupName}>{uiTracker.selectedCarrier.name}</p>
                   <p className={style.popupAge}>{`Age: ${uiTracker.selectedCarrier.age}`}</p>
                    <p className={style.popupTransport}>{`Transport: ${uiTracker.selectedCarrier.transport}`}</p>
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