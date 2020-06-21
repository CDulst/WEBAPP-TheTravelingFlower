import React from 'react';
import style from './challengeText.module.css'
import uiStore from '../../stores/uiStore';
import { useObserver } from 'mobx-react-lite';



function ChallengeText({icon,title,flag,text}) {

  return useObserver(() =>(
  <>
  <div className={( uiStore.TextOut ? `${style.challengeText__container} ${style.ChallengeTextDisplayBlock}` : `${style.challengeText__container} ${style.ChallengeTextDisplayNone}` )}>
  <img className={style.challengeTextIcon} src = {icon} alt="icon"/>
  <div className={style.challengeTextWrapper}>
  <p className={style.challengeTextTitle}>{title}</p>
  <img src = {flag} alt="flag"/>
  </div>
  <p className={style.challengeTextParagraph}>{text}</p>
  </div>
  </>

  
  ));
}

export default ChallengeText;