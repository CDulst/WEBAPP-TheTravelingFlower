import React from 'react';
import style from './progressBar.module.css';
import lineInactive from '../../../../../assets/apply/lineInactive.png'
import lineActive from '../../../../../assets/apply/lineActive.png'
import activeStep from '../../../../../assets/apply/activeStep.svg'
import inactiveStep from '../../../../../assets/apply/inactiveStep.svg'


function ProgressBar({type}) {
  return (
  <>
  <div className = {style.progressWrapper}>
  <h2 className = {style.hidden}> ProgressBar </h2>
  <img className = {style.line} src = {activeStep} alt="active step" />
  <div className = {style.stepWrapper}>
  <img  src = {inactiveStep} alt="inactive step" />
  <p className = {style.step}> Step 1 </p>
  </div>
  <img className = {style.line} src = {lineActive} alt="line active" />
  <div className = {style.stepWrapper}>
  <img src = {inactiveStep} alt="inactive step two" />
  <p className = {style.step}> Step 2 </p>
  </div>
  <img className = {style.line} src = {lineInactive} alt="line inactive" />
  <div className = {style.stepWrapper}>
  <img src = {inactiveStep} alt="inactive step three" />
  <p className = {style.step}> Step 3 </p>
  </div>
  <img className = {style.line} src = {lineInactive} alt="lineInactive step two" />
  <div className = {style.stepWrapper}>
  <img src = {inactiveStep} alt = "inactive step four" />
  <p className = {style.step}> Step 4 </p>
  </div>
  </div>
  </>
  );
}

export default ProgressBar;
