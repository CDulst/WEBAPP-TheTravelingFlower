import React from 'react';
import logo from '../../../../../assets/logo.svg'
import Button from '../../../../components/button/button'
import style from "./videoscreen.module.css"



function VideoScreen() {
  return (
  <>
  <div className = {style.video}> 
  <div className = {style.videoContainer}>
  <video className = {style.videoBG} autoPlay loop muted>
     <source src = "/videos/video.mp4" type="video/mp4"/>
  </video>
  </div>
  <img className = {style.logo} src = {logo}/>
  <div className = {style.button__container}>
  <div className = {style.buttons}>
  <Button value = "GET STARTED" type = "secondary"/>
  <Button value = "LOG IN" type = "primary"/>
  </div>
  </div>
  </div>
  </>
  );
}

export default VideoScreen;