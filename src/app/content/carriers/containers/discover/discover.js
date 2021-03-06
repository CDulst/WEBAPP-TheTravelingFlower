import React, {useState} from 'react';
import style from './discover.module.css'
import Button from '../../../../components/button/button';
import {Link} from "react-router-dom";
import ReactMapboxGl, { Layer, Feature, Image } from 'react-mapbox-gl';
import { useObserver } from 'mobx-react-lite';
import {uiStoreCarriers} from '../../stores/UiStore';
import awaiting from '../../../../../assets/carrier/awaiting.svg'
import { useStore } from '../../../../../hooks';
import {uiStore} from '../../../../../UiStore'



const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
      
      minZoom: [2]
  });



const Discover = ({start, end, type}) => {

    if(uiStore.activePage !== "carriers") {
        uiStoreCarriers.setSelectedRoute(undefined)
        uiStoreCarriers.setSelectedCarrier(undefined);
    }

    console.log(uiStore.activePage);


    const {serverValuesStore} = useStore();
    const [viewport] = useState({
            container: 'map',
            zoom: [6],
            pitch:[0]
          
        })



    return useObserver(() =>   (
        <div id='map' className={style.mapboxContainer}>
            <div className={style.mapboxButton}>

           {uiStoreCarriers.selectedRoute && uiStoreCarriers.selectedRoute.status === "awaiting" ? (
                <div className={style.flowerArival__container}>
                <img className={style.awaiting__image} src={awaiting}></img>
                <p className={style.awaitingText}>Awaiting flower arival ...</p>
                </div>
                
            ): null}

            {uiStoreCarriers.selectedRoute && uiStoreCarriers.selectedRoute.status === "completed" ? (
                <>
               <Link to={`/carriers/detail/${uiStoreCarriers.selectedRoute.id}`}><Button value="discover journey"/></Link>
               <p className={style.completedStatus}>Completed</p>
               </>
            ): null}

            {uiStoreCarriers.selectedRoute && uiStoreCarriers.selectedRoute.status === "happening" ? (
                <Link to={`/carriers/detail/${uiStoreCarriers.selectedRoute.id}`}><Button value="discover journey"/></Link>
            ): null}


           
 
            

            </div>

        
<Map center={(uiStoreCarriers.selectedRoute ? ([uiStoreCarriers.selectedRoute.startCoordinate.Rc, uiStoreCarriers.selectedRoute.startCoordinate.Ac+1]): serverValuesStore.serverValues[serverValuesStore.serverValues.length - 1] ? [serverValuesStore.serverValues[serverValuesStore.serverValues.length - 1].location.Rc, serverValuesStore.serverValues[serverValuesStore.serverValues.length - 1].location.Ac]: [13.08434, 52.51435])} className={style.mapbox2} {...viewport} style="mapbox://styles/yorbengoor/ckbqhut424xj51iqattj488n8">
    {uiStoreCarriers.selectedRoute ? (
        <>
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
                

        </>
    ):
    null
    }

<Image id={"current-marker-icon"} url={"https://upload.wikimedia.org/wikipedia/commons/f/f6/Logosfsdfsdf.png"}></Image>

<Layer id="marker" layout={{"icon-image": "current-marker-icon", "icon-size": 0.5, "icon-ignore-placement": true, "icon-offset": [0,-20] }}  id="jumpingCarrier3">
    <Feature coordinates={[13.08434, 52.51435]}></Feature>
</Layer>


</Map>
        
            
     
        </div>
    ));
};

export default Discover;