import React from 'react';
import logo from '../../../../../assets/logo.svg'
import Button from '../../../../components/button/button'



function VideoScreen() {
  return (
  <>
  <div> 
  <video controls width="250px">
    <source src="/media/examples/flower.webm"
            type="video/webm"/>

    <source src="/media/examples/flower.mp4"
            type="video/mp4"/>
  </video>
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