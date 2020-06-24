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
import cross from '../../../../assets/tracker/cross.svg'
import popup from './components/popup/popup';
import Popupinfo from './components/popup/popup';
import Button from '../../../components/button/button'
import { uiStoreCarriers } from '../../carriers/stores/UiStore';
import { Link } from 'react-router-dom';
import {dataStore} from '../stores/DataStore'
import 'mobx-react-lite/batchingForReactDom'
import {v4} from "uuid"




const Map = ReactMapboxGl({

  
    
    accessToken:
      'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
      
      minZoom: [4.6]
  });



const Mapbox = () => {
    

    let place = undefined;

    
        if(dataStore.place[0]) {
            place = dataStore.place[0].locality
        }

        console.log(place)
 

    
    const {routeStore, carrierStore, uiStore,serverValuesStore} = useStore();
    const [checkpoints, setCheckpoints] =useState(null);
    const [currentCarrier, setCurrentCarrier] = useState(null)
    const [carrierLocation, setCarrierLocation] = useState();

    let Kmdone = undefined;
    let KmToGo = undefined;

    if(routeStore.routes[3] && serverValuesStore.serverValues[0]) {
        const resultKmDone = dataStore.calculatePoints(routeStore.routes[3], serverValuesStore.serverValues);
        Kmdone = resultKmDone.toFixed(2)
    }

    
    if(routeStore.routes[routeStore.routes.length-1] && serverValuesStore.serverValues[0]) {
        const resultKmToGo = dataStore.calculatePoints(routeStore.routes[routeStore.routes.length-1], serverValuesStore.serverValues);
        KmToGo = resultKmToGo.toFixed(2);   
        dataStore.getLocation(serverValuesStore.serverValues[0])
        
    }

       
    
  

    console.log('hey');

    let percentage = Kmdone/KmToGo*100;
    
  
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
            uiStoreCarriers.setSelectedCarrierFromTracker(selectedCarrier);
            
        }


        uiStore.setCurrentCarrier(carrierStore.carriers[0]);

        if(currentCarrier){
            const currentRoute = routeStore.findRouteById(uiStore.currentCarrier.routeId);
            uiStore.setRoute(currentRoute);
        }

        
        const handleOnClick = (e) => {
            uiTracker.UIOut();
          }

          const handleInfoClick = (e) => {
              uiTracker.popupOut();
              console.log(uiTracker.popup);
          }
          
        
          return useObserver(() => (
        
        <>
        <div className={style.secondContainer}>

        
            <div className={style.donationCounter}>
            <DonationCounter />
            </div>

            <div className={(uiTracker.popup ? `${style.positioningPopup} ${style.animationDisplayBlock}` : `${style.positioningPopup} ${style.animationDisplayNone}`)}>
                <Popupinfo toGo={KmToGo} done={Kmdone}/>
            </div>

            <div className={style.progressbarLocation}>
                <ProgressbarLocation location={place} percentage={percentage.toString()}  />
            </div>

            <div className={style.iconMessage}>
                <PopupIcon icon={message} direction="-1" click = {handleOnClick} />
            </div>

            <div className={style.iconInfo}>
                <PopupIcon icon={info} click={handleInfoClick} />
            </div>

            <div className={style.livechat}>
            <Livechat />
            </div>
            
            <Map {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb?optimize=true">

                <Image id={"marker-icon"} url={"https://upload.wikimedia.org/wikipedia/commons/2/28/Marker76887687.png"}></Image>
                <Image id={"current-marker-icon"} url={"https://upload.wikimedia.org/wikipedia/commons/f/f6/Logosfsdfsdf.png"}></Image>
                

                <Layer  onClick={e => {setCurrentCarrier(uiStore.currentCarrier)}} id="marker" layout={{"icon-image": "current-marker-icon", "icon-size": 0.5, "icon-ignore-placement": true, "icon-offset": [0,-70] }}  id="currentCarrier">
                    <Feature coordinates={serverValuesStore.serverValues[serverValuesStore.serverValues.length - 1] ? [serverValuesStore.serverValues[serverValuesStore.serverValues.length - 1].location.Rc, serverValuesStore.serverValues[serverValuesStore.serverValues.length - 1].location.Ac]: [13.08434, 52.51435]}></Feature>
                </Layer>

                {currentCarrier ? (
                    <Popup key={currentCarrier.id} className={style.popupCurrent} coordinates={serverValuesStore.serverValues[serverValuesStore.serverValues.length - 1] ? [serverValuesStore.serverValues[serverValuesStore.serverValues.length - 1].location.Rc, serverValuesStore.serverValues[serverValuesStore.serverValues.length - 1].location.Ac]: [13.08434, 52.51435]}>
                        <div className={style.currentCarrier__container}>
                    
                        <img className={style.currentCarrierImage} src={currentCarrier.pic} alt="currentCarrier"></img>
                        <div className={style.currentCarrier__wrapper}>
                        <p className={style.currentCarrierName}>{currentCarrier.name}</p>
                        <p className={style.currentCarrierKmDone}>200km/310km</p>
                        </div>

                        <div className={style.currentCarrier__wrapper}>
                            <p className={style.currentCarrierName}>current Route:</p>
                            <p className={style.currentCarrierKmDone}>{`${uiStore.currentRoute.startName}-${uiStore.currentRoute.endName}`}</p>
                        </div>

                        <img onClick={e => {setCurrentCarrier(null)}} src={cross} alt="cross"></img>

                        </div>
                    </Popup>
                ): null}

                {currentCarrier ? (
                        <Layer key={v4} type="line" paint={{"line-color":"#104ccf", "line-width": 4, "line-opacity": 0.5}}>
                                <Feature coordinates={[[13.08434, 52.51435], [uiStore.currentRoute.endCoordinate.Rc, uiStore.currentRoute.endCoordinate.Ac]]} />
                        </Layer>
                ): null}

                {routeStore.routes.map(checkpoint => (

                <>

                <Layer onClick={e => {setCheckpoints(checkpoint)}} id="marker" id={checkpoint.id} layout={{"icon-image": "marker-icon", "icon-size": 0.8, "icon-ignore-placement": true, "icon-offset": [0,-20] }}   key={checkpoint.distance}  >
                    <Feature coordinates={[checkpoint.startCoordinate.Rc, checkpoint.startCoordinate.Ac]}></Feature>
                </Layer>   
                </>
                ))}

            {checkpoints ? (
             

                    <Layer key={v4} type="line" paint={{"line-color":"#104ccf", "line-width": 4, "line-opacity": 0.5}}>
                            <Feature coordinates={[[checkpoints.startCoordinate.Rc, checkpoints.startCoordinate.Ac], [checkpoints.endCoordinate.Rc, checkpoints.endCoordinate.Ac]]} />
                    </Layer>
            ) : null}

            {checkpoints && uiTracker.selectedCarrier ? ( 
        
                <Popup className={style.containerPopup} coordinates={[checkpoints.startCoordinate.Rc, checkpoints.startCoordinate.Ac]}>
                    <div className={style.crossPopUp}>
                    <img onClick={e=>{setCheckpoints(null)}} src={cross} alt="close"></img>
                    </div>
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
                   {checkpoints.status === "completed" ? (
                     <Link to={`/carriers/detail/${checkpoints.id}`}><Button value="discover journey"/></Link>
                   ) : null}

                    {checkpoints.status == "happening" ? (
                     <Link to={`/carriers/detail/${checkpoints.id}`}><Button value="discover journey"/></Link>
                   ) : null}

                    {checkpoints.status == "awaiting" ? (
                     <Link to={'/tracker'}><Button disable="treu" value="Awaiting flower arival"/></Link>
                   ) : null}


                      
                  
                   
                   
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