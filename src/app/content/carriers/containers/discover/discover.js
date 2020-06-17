import React, {useState} from 'react';
import style from './discover.module.css'
import Button from '../../../../components/button/button';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoieW9yYmVuZ29vciIsImEiOiJja2IwcGE1Mm4wNTBuMzJtaXIwMjU3aHc2In0.URiltHb9cC88qeRt2HcbBA',
      
      minZoom: [2.7]
  });

const Discover = ({start, end, type}) => {
    const [viewport] = useState({
        containerStyle:{
            height: '100vh',
            width: '40vw'
                },
            zoom: [4],
            pitch:[60]
          
        })

    return (
        <div className={style.mapboxContainer}>
            <div className={style.mapboxButton}>
            <Button value="discover journey"/>
            </div>


            <Map {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb"/>
            
        </div>
    );
};

export default Discover;