import React from 'react';
import style from './personal.module.css';
import Field from "../../../../components/field/field";
import FullNameIcon from "../../../../../assets/icons/name.svg"
import EmailIcon from "../../../../../assets/icons/email.svg"
import questionMark from "../../../../../assets/icons/popup.svg"



function Personal() {
  return (
  <>
  <div>
    <div>
      <p> Full Name </p> 
        <Field icon={FullNameIcon} value="Full name"/>
     </div>  
    <div>
      <p> Email </p> 
      <Field icon={EmailIcon} value="E-mail"/>
    </div> 
  <div className={style.identificationNumberAge__wrapper}>
    <div className={style.formField__identification}>
      <p> Identification Number (ID) </p> 
      <Field value="Identification Number" popup={questionMark}/>
      <img className={style.button__popup} src={questionMark} alt="popup"></img>
    </div> 
  <div>
    <p> Age </p> 
    <Field value="Age"/>
  </div>
</div>
</div>
  </>
  );
}

export default Personal;
