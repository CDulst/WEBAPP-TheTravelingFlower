import React from 'react';
import SwitchButton from "../../../../components/switch/switch";
import ChallengeVideo from "../../components/challengeVideo/challengeVideo";
import style from './assignment.module.css'

function Assignment() {
  return (
  <>
  <div className={style.assignment__container}>

  <SwitchButton item1 = "text" item2 = "video"/>
  {/*<ChallengeText icon = {icon} title = "Today the flower is located in Amsterdam" flag ={flag} text= "For today’s challenge, you need to make a Tulip in paper. Here is a good tutorial that can help: WWW.YOUTUBE.COM . Take a picture of your result and post in on your social media platforms. Each post is worth €0.20 cent that will be donated to the money jar. "/>*/}

  <ChallengeVideo className = {style.video} video = "/videos/video.mp4"/>
 
  </div>
  </>
  );
}

export default Assignment;