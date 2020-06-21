import React, {useState} from 'react';
import style from './discover.module.css'
import Button from '../../../../components/button/button';
import {Link} from "react-router-dom";
import ReactMapboxGl from 'react-mapbox-gl';
import { uiStoreCarriers } from '../../stores/UiStore';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
      
      minZoom: [2.7]
  });



const Discover = ({start, end, type}) => {

    




    const [viewport] = useState({
            container: 'map',
            zoom: [4],
            pitch:[60]
          
        })




    return (
        <div id='map' className={style.mapboxContainer}>
            <div className={style.mapboxButton}>
            <Link to="/carriers/detail"><Button value="discover journey"/></Link>
            </div>

            {uiStoreCarriers.selectedRoute ? (
<Map center={[uiStoreCarriers.selectedRoute.startCoordinate.Rc, uiStoreCarriers.selectedRoute.startCoordinate.Ac]} className={style.mapbox2} {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb"></Map>
            ) : null}
            


            
            
            
        </div>
    );
};

export default Discover;