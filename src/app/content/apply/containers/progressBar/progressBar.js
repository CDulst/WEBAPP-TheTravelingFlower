import React from 'react';
import style from './progressBar.module.css';
import lineInactive from '../../../../../assets/apply/lineInactive.png'
import lineActive from '../../../../../assets/apply/lineActive.png'
import activeStep from '../../../../../assets/apply/activeStep.svg'
import doneStep from '../../../../../assets/apply/doneStep.png'
import inactiveStep from '../../../../../assets/apply/inactiveStep.svg'


function ProgressBar({type}) {
  return (
  <>
  <div class = {style.progressWrapper}>
  <h2 class = {style.hidden}> ProgressBar </h2>
  <img className = {style.line} src = {activeStep} />
  <div className = {style.stepWrapper}>
  <img  src = {inactiveStep} />
  <p className = {style.step}> Step 1 </p>
  </div>
  <img className = {style.line} src = {lineActive} />
  <div className = {style.stepWrapper}>
  <img src = {inactiveStep} />
  <p className = {style.step}> Step 2 </p>
  </div>
  <img className = {style.line} src = {lineInactive} />
  <div className = {style.stepWrapper}>
  <img src = {inactiveStep} />
  <p className = {style.step}> Step 3 </p>
  </div>
  <img className = {style.line} src = {lineInactive} />
  <div className = {style.stepWrapper}>
  <img src = {inactiveStep} />
  <p className = {style.step}> Step 4 </p>
  </div>
  </div>
  </>
  );
}

export default ProgressBar;
