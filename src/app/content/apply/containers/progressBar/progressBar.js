import React from 'react';
import {Link} from "react-router-dom"
import style from './progressBar.module.css';
import lineInactive from '../../../../../assets/apply/lineInactive.png'
import lineActive from '../../../../../assets/apply/lineActive.png'
import activeStep from '../../../../../assets/apply/activeStep.svg'
import inactiveStep from '../../../../../assets/apply/inactiveStep.svg'
import doneStep from '../../../../../assets/apply/doneStep.png'
import uiApply from "../../stores/uiStore";

function ProgressBar({type}) {
  return (
  <>
  <div className = {style.progressWrapper}>
  <h2 className = {style.hidden}> ProgressBar </h2>
  <img className = {(uiApply.currentStep === "personal" ? `${style.active} ${style.activestep1}` : uiApply.currentStep === "adres" ? `${style.active } ${style.activestep2}` : uiApply.currentStep === "route" ? `${style.active } ${style.activestep3}` :  `${style.active } ${style.activestep4}`) } src = {activeStep} alt="active step" />
  <div className = {style.stepWrapper}>
  {

  <img  src = {doneStep} alt="inactive step" />

}
  <p className = {style.step} style = {(uiApply.currentStep != "personal" ? {color:"red"} : {fontWeight: "800",color:"red"})}> Step 1 </p>

  </div>
  {
  (uiApply.currentStep != "personal"  ?
  <img className = {style.line} src = {lineActive} alt="inactive step" />
  :
  <img className = {style.line} src = {lineInactive} alt="inactive step" />
  )
}
  <div className = {style.stepWrapper}>
  {
  (uiApply.currentStep != "personal"  ?
  <img  src = {doneStep} alt="inactive step" />
  :
  <img  src = {inactiveStep} alt="inactive step" />
  )
}
  <p className = {style.step} style = {(uiApply.currentStep != "personal" && uiApply.currentStep != "adres" ? {color:"red"} : uiApply.currentStep === "adres" ? {fontWeight: "800",color:"red"} : {})}> Step 2 </p>
  </div>
  {
  (uiApply.currentStep != "personal" && uiApply.currentStep != "adres"  ?
  <img className = {style.line} src = {lineActive} alt="inactive step" />
  :
  <img className = {style.line} src = {lineInactive} alt="inactive step" />
  )
}
  <div className = {style.stepWrapper}>
  {
  (uiApply.currentStep != "personal" && uiApply.currentStep != "adres"  ?
  <img  src = {doneStep} alt="inactive step" />
  :
  <img  src = {inactiveStep} alt="inactive step" />
  )
}
  <p className = {style.step} style = {(uiApply.currentStep != "personal" && uiApply.currentStep != "adres" && uiApply.currentStep != "route" ? {color:"red"} : uiApply.currentStep === "route" ? {fontWeight: "800",color:"red"} : {})}> Step 3 </p>
  </div>
  {
  (uiApply.currentStep != "personal" && uiApply.currentStep != "adres" && uiApply.currentStep != "route"   ?
  <img className = {style.line} src = {lineActive} alt="inactive step" />
  :
  <img className = {style.line} src = {lineInactive} alt="inactive step" />
  )
}
  <div className = {style.stepWrapper}>
  {
  (uiApply.currentStep != "personal" && uiApply.currentStep != "adres" && uiApply.currentStep != "route"  ?
  <img  src = {doneStep} alt="inactive step" />
  :
  <img  src = {inactiveStep} alt="inactive step" />
  )
}
  <p className = {style.step} style = {(uiApply.currentStep != "motivation" ? {} : {fontWeight: "800",color:"red"})} > Step 4 </p>
  </div>
  </div>
  </>
  );
}

export default ProgressBar;
