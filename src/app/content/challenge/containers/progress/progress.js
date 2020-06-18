import React from 'react';
import Progressbar from '../../../../components/progressbar/progressbar';
import style from './progress.module.css'
import indicator from '../../../../../assets/challenge/indicatorChallenge.png'



function Progress({title, start, end, current, percentage}) {
  return (
  <>
  
  <div className={style.progress}>
    <div>
    <img style={{left: `${percentage}%`}} className={style.indicator} src={indicator} alt="indicator"></img>
    <p>{current}</p>
    </div>
    <p className={style.progressTitle}>{title}</p>
    <Progressbar percentage={percentage}/>
    <div className={style.info}>
      <p>{start}</p>
      <p>{end}</p>
    </div>
  </div>
  </>
  );
}

export default Progress;