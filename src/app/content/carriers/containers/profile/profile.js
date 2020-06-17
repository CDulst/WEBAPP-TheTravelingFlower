import React from 'react';
import {Link} from "react-router-dom";
import style from './profile.module.css'



function Profile({pic, name, flag, age, transport,bio}) {
  return (
  <>
  <div className={style.informationContainer}>
    <img src={pic} alt="carrierphoto"></img>
      <div>
        <p>{name}</p>
        <img src={flag} alt="carrierflag"></img>
      </div>

    
      <article>
        <h2>Personal info</h2>
    <div>
      <div>
        <p>Age:</p>
        <p>{age}</p>
      </div>
      <div>
        <p>transport:</p>
        <p>{transport}</p>
      </div>
      <div>
        <p>Bio:</p>
        <p>{bio}</p>{/*Tom is a young nature activist. He likes to spend his free time in his garden. He montly supports the charity "green peace" his goals in the future is to make sure the world changes to be more green!*/}
      </div>
    </div>
      </article>

    <div>
      {/*
      <div>
        <img src={instagram} alt="instagram"></img>
        <img src={twitter} alt="twitter"></img>
        <img src={facebook} alt="facebook"></img>
      </div>
      */}

      <p>#TheTravelingFlower</p>
    </div>
   
  </div>
  </>
  );
}

export default Profile;