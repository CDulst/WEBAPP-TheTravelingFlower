import React from 'react';
import {Link} from "react-router-dom";
import line from "../../../../../assets/challenge/line.svg";
import icon from "../../../../../assets/challenge/icon.svg";
import flag from "../../../../../assets/challenge/flag.svg";
import SwitchButton from "../../../../components/switch/switch";
import ChallengeText from "../../components/challengeText";
import ChallengeVideo from "../../components/challengeVideo";

function Assignment() {
  return (
  <>
  <div>
  <img src = {line} alt = "line"/>
  <SwitchButton item1 = "text" item2 = "video"/>
  <ChallengeText icon = {icon} title = "Today the flower is located in Amsterdam" flag ={flag} text= "For today’s challenge, you need to make a Tulip in paper. Here is a good tutorial that can help: WWW.YOUTUBE.COM . Take a picture of your result and post in on your social media platforms. Each post is worth €0.20 cent that will be donated to the money jar. "/>
  <ChallengeVideo video = "/videos/video.mp4"/>
  <img src = {line} alt = "line"/>
  </div>
  </>
  );
}

export default Assignment;