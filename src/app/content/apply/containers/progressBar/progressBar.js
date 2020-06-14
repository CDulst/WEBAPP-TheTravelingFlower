import React from 'react';
import style from './progressBar.module.css';
import Button from '../button/button';
import lineInactive from '../progressBar/lineInactive'
import lineActive from '../progressBar/lineActive'
import activeStep from '../progressBar/activeStep'
import doneStep from '../progressBar/doneStep'
import inactiveStep from '../progressBar/inactiveStep'


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
  <img src = {lineInactive} />
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
