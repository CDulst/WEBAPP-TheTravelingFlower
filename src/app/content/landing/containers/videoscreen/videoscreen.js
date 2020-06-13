import React from 'react';
import logo from '../../../../../assets/logo.svg'
import Button from '../../../../components/button/button'
import style from "./videoscreen.module.css"


function VideoScreen() {
  return (
  <>
  <div className = {style.video}> 
  <div>
  <p>Video</p>
  </div>
  <img src = {logo}/>
  <div className = "Buttons">
  <Button value = "GET STARTED" type = "primary"/>
  <Button value = "LOG IN" type = "secondary"/>
  </div>
  </div>
  </>
  );
}

export default VideoScreen;