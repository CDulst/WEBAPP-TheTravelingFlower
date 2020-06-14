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
  <div>
  <h2> ProgressBar </h2>
  <img src = {activeStep} />
  <div>
  <img src = {inactiveStep} />
  <p> Step 1 </p>
  </div>
  <img src = {lineActive} />
  <div>
  <img src = {inactiveStep} />
  <p> Step 2 </p>
  </div>
  <img src = {lineInactive} />
  <div>
  <img src = {inactiveStep} />
  <p> Step 3 </p>
  </div>
  <img src = {lineInactive} />
  <div>
  <img src = {inactiveStep} />
  <p> Step 4 </p>
  </div>
  </div>
  </>
  );
}

export default ProgressBar;
