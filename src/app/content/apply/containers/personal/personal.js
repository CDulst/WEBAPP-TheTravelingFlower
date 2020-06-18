import React from 'react';
import style from './personal.module.css';
import Field from "../../../../components/field/field";
import FullNameIcon from "../../../../../assets/icons/name.svg"
import EmailIcon from "../../../../../assets/icons/email.svg"
import questionMark from "../../../../../assets/icons/popup.svg"
import identityImage from "../../../../../assets/icons/identity.svg"



function Personal() {

  const handlePopupClick = () => {
    //popup moet verschijnen als je klikt op het vraagteken
  }

  return (
  <>
  <div className = {style.personal}>
    <div className = {style.per}>
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
      <Field value="Identification Number" icon={identityImage}/>
      <img onClick={handlePopupClick} className={style.button__popup} src={questionMark} alt="popup"></img>
    </div> 
  <div>
    <p> Age </p> 
    <Field value="Age" width="6rem"/>
  </div>
</div>
</div>
  </>
  );
}

export default Personal;
