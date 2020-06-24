import React from 'react';
import style from './personal.module.css';
import Field from "../../../../components/field/field";
import FullNameIcon from "../../../../../assets/icons/name.svg"
import EmailIcon from "../../../../../assets/icons/email.svg"
import questionMark from "../../../../../assets/icons/popup.svg"
import identityImage from "../../../../../assets/icons/identity.svg"
import personalStore from "../../stores/personal";
import { useObserver } from 'mobx-react-lite';
const OnChangeEmail = (e) => {
  personalStore.change("email",e.currentTarget.value);
  personalStore.putonNull("email");
  personalStore.checkEnable()
  }
  const OnChangeName = (e) => {
  console.log("hello");
  personalStore.change("name",e.currentTarget.value);
  personalStore.putonNull("name");
  }
  
  const OnChangeIdentification = (e) => {
    personalStore.change("identification",e.currentTarget.value);
  personalStore.putonNull("identification");
  }
  const OnChangeAge = (e) => {
  console.log("pass")
  personalStore.change("age",e.currentTarget.value);
  personalStore.putonNull("age");
  personalStore.checkEnable()
  personalStore.checkfields();
  }
 
  const OnClick = (e) => {
    console.log("click");
    personalStore.checkfields();
    personalStore.checkEnable()
  }

function Personal() {

  const handlePopupClick = () => {
    //popup moet verschijnen als je klikt op het vraagteken
  }

  return useObserver(() => (
  <>
  <div className = {style.personal}>
    <div className = {style.per}>
      <p> Full Name </p> 
      {
  (personalStore.nameCorrect ?
        <Field icon={FullNameIcon} onClick = {OnClick} onValue = {personalStore.name} correct = "true" onChange = {OnChangeName} value="Full name"/>
     : personalStore.nameError !== "" ? 
     <Field icon={FullNameIcon} onClick = {OnClick} onValue = {personalStore.name} wrong = "true" errorMessage = {personalStore.nameError} onChange = {OnChangeName} value="Full name"/>
       :
       <Field icon={FullNameIcon} onClick = {OnClick} onValue = {personalStore.name} onChange = {OnChangeName} value="Full name"/>
  )}
       </div>  
    <div>
      <p> Email </p>
      {
  (personalStore.emailCorrect ? 
      <Field icon={EmailIcon} onClick = {OnClick} onValue = {personalStore.email} correct = "true" onChange = {OnChangeEmail}  value="E-mail"/>
      : personalStore.emailError !== "" ? 
      <Field icon={EmailIcon} onClick = {OnClick} onValue = {personalStore.email} errorMessage = {personalStore.emailError} wrong = "true" onChange = {OnChangeEmail}  value="E-mail"/>
      :
      <Field icon={EmailIcon} onClick = {OnClick} onValue = {personalStore.email}  onChange = {OnChangeEmail}  value="E-mail"/>
      )}
      </div> 
  <div className={style.identificationNumberAge__wrapper}>
    <div className={style.formField__identification}>
      <p> Identification Number (ID) </p> 
      {
  (personalStore.identificationCorrect ? 
      <Field value="Identification Number" correct = "true" onValue = {personalStore.identification} onClick = {OnClick} onChange = {OnChangeIdentification}  icon={identityImage}/>
      : personalStore.identificationError !== "" ? 
      <Field value="Identification Number" wrong = "true" onValue = {personalStore.identification}errorMessage = {personalStore.identificationError} onClick = {OnClick} onChange = {OnChangeIdentification}  icon={identityImage}/>
:  
<Field value="Identification Number" onClick = {OnClick} onValue = {personalStore.identification} onChange = {OnChangeIdentification}  icon={identityImage}/>
    )}
      <img onClick={handlePopupClick} className={style.button__popup} src={questionMark} alt="popup"></img>
    </div> 
  <div>
    <p> Age </p> 
    {
  (personalStore.ageCorrect ? 
    <Field value="Age" correct = "true" onClick = {OnClick} onValue = {personalStore.age} onChange = {OnChangeAge} width="6rem"/>
    : personalStore.ageError !== "" ? 
    <Field value="Age" wrong = "true" errorMessage = {personalStore.ageError} onValue = {personalStore.age} onClick = {OnClick} onChange = {OnChangeAge} width="6rem"/>
    : 
    <Field value="Age" onClick = {OnClick} onChange = {OnChangeAge} onValue = {personalStore.age} width="6rem"/>
    )}
    </div>
</div>
</div>
  </>
  ));
}

export default Personal;
