import React from 'react';
import {Link} from "react-router-dom";
import Progressbar from '../../../../components/progressbar/progressbar';
import style from './progress.module.css'
import indicator from '../../../../../assets/challenge/indicatorChallenge.png'



function Progress({title, start, end, current}) {
  return (
  <>
  
  <div className={style.progress}>
    <div>
    <img src={indicator} alt="indicator"></img>
    <p>{current}</p>
    </div>
    <p>{title}</p>
    <Progressbar percentage="10%"/>
    <div>
      <p>{start}</p>
      <p>{end}</p>
    </div>
  </div>
  </>
  );
}

export default Progress;