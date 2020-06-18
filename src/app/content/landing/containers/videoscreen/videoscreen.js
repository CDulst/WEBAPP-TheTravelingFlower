import React from 'react';
import logo from '../../../../../assets/logo.svg'
import Button from '../../../../components/button/button'
import style from "./videoscreen.module.css"
import uiLanding from "../../uiStore";
import {Link} from "react-router-dom";

function VideoScreen() {

  const handleClick= e => {
  uiLanding.UIOut();
  }

 

  return (
  <>
  <div className = {style.video}> 
  <div className = {style.videoContainer}>
  <video className = {style.videoBG} autoPlay loop muted>
     <source src = "/videos/promo.mp4" type="video/mp4"/>
  </video>
  </div>
  <img className = {style.logo} src = {logo} alt="logo"/>
  <div className = {style.button__container}>
  <div className = {style.buttons}>
  <Link to="/join" onClick = {e => handleClick(e)} ><Button value = "GET STARTED" type = "secondary"/></Link>
  <Link to = "/" onClick = {e => handleClick(e)}  ><Button value = "LOG IN" type = "primary"/></Link>
  </div>
  </div>
  </div>
  </>
  );
}

export default VideoScreen;