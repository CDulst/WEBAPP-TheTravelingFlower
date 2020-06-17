import React from 'react';
import {Link} from "react-router-dom";
import style from './challengeText.module.css'



function ChallengeText({icon,title,flag,text}) {
  return (
  <>
  <div className={style.challengeText__container}>
  {/*<img src = {icon}/>*/}
  <div>
  <p>{title}</p>
  <img src = {flag}/>
  </div>
  <p>{text}</p>
  </div>
  </>
  );
}

export default ChallengeText;