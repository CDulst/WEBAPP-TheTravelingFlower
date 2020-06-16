import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
import DonationCounter from './donationCounter/DonationCounter'
import style from './mapbox.module.css';
import ProgressbarLocation from './ProgressLocation/ProgressLocation';

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


    return (
       
        <div className={style.secondContainer}>
            <div className={style.donationCounter}>
            <DonationCounter />
            </div>

            <div className={style.progressbarLocation}>
            <ProgressbarLocation />
            </div>

            <Map {...viewport} style="mapbox://styles/yorbengoor/ckb6nfdnm3x4o1ip6nvt5psbb"/> 
            
        </div>
    
    );
};

export default Mapbox;