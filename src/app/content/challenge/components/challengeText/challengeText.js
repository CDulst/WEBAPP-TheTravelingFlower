import React from 'react';
import style from './challengeText.module.css'



function ChallengeText({icon,title,flag,text}) {
  return (
  <>
  <div className={style.challengeText__container}>
  {/*<img src = {icon}/>*/}
  <div>
  <p>{title}</p>
  <img src = {flag} alt="flag"/>
  </div>
  <p>{text}</p>
  </div>
  </>
  );
}

export default ChallengeText;