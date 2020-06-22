import React, {useState} from 'react';
import style from './discover.module.css'
import Button from '../../../../components/button/button';
import {Link} from "react-router-dom";
import ReactMapboxGl from 'react-mapbox-gl';
import { uiStoreCarriers } from '../../stores/UiStore';
import { useObserver } from 'mobx-react-lite';


const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
      
      minZoom: [2.7]
  });



const Discover = ({start, end, type}) => {

    const [viewport] = useState({
            container: 'map',
            zoom: [9],
            pitch:[60]
          
        })



    return useObserver(() =>   (
        <div id='map' className={style.mapboxContainer}>
            <div className={style.mapboxButton}>
            <Link to="/carriers/detail"><Button value="discover journey"/></Link>
            </div>

        
<Map center={(uiStoreCarriers.selectedRoute ? ([uiStoreCarriers.selectedRoute.startCoordinate.Rc, uiStoreCarriers.selectedRoute.startCoordinate.Ac]): [13.08434, 52.51435])} className={style.mapbox2} {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb"></Map>
        
            
     
        </div>
    ));
};

export default Discover;