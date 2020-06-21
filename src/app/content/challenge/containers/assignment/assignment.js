import React from 'react';
import SwitchButton from "../../../../components/switch/switch";
import ChallengeVideo from "../../components/challengeVideo/challengeVideo";
import style from './assignment.module.css'
import ChallengeText from '../../components/challengeText/challengeText';
import icon from '../../../../../assets/challenge/icon.svg'
import { useStore } from '../../../../../hooks';

function Assignment() {

  const {challengeStore} = useStore();

  return (
  <>
  <div className={style.assignment__container}>

  <SwitchButton item1 = "text" item2 = "video"/>
  <ChallengeText icon = {icon} title = {challengeStore.currentChallenge.title} flag ="https://i.ibb.co/vZxVhM0/german-flag.png" text= {challengeStore.currentChallenge.description}/>

  <ChallengeVideo className = {style.video} video = "/videos/video.mp4"/>
 
  </div>
  </>
  );
}

export default Assignment;