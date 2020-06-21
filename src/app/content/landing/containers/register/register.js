import React from 'react';
import {Link} from "react-router-dom";
import email from '../../../../../assets/icons/email.svg'
import password from '../../../../../assets/icons/password.svg'
import name from '../../../../../assets/icons/name.svg'
import phone from '../../../../../assets/icons/phone.svg'
import Field from '../../../../components/field/field'
import Button from '../../../../components/button/button'
import style from "./register.module.css"
import {registerStore} from "../../stores/registerStore";
import { useObserver } from 'mobx-react-lite';
const OnChangeEmail = (e) => {
registerStore.email = e.currentTarget.value;
registerStore.putonNull("email");
registerStore.checkEnable()
}
const OnChangeName = (e) => {
console.log("hello");
registerStore.name = e.currentTarget.value;
registerStore.putonNull("name");
registerStore.checkEnable()
}
const onClickhandle = (e) => {
  registerStore.register();
  }
const OnChangePhone = (e) => {
registerStore.phone = e.currentTarget.value;
registerStore.putonNull("phone");
}
const OnChangePass = (e) => {
console.log("pass")
registerStore.password = e.currentTarget.value;
registerStore.putonNull("password");
}
const OnChangeRepeat = (e) => {
  registerStore.repeat = e.currentTarget.value;
  registerStore.putonNull("repeat");
  registerStore.checkfields();
}
const OnClick = (e) => {
  console.log("click");
  registerStore.checkfields();
}

function Register() {
  return useObserver(() => (
  <>
  <div className = {style.register__container}>
  <div className = {style.register}>
  <h2 className = {style.title}> Join our community !</h2>
  <form className = {style.form}>
  {
  (registerStore.nameCorrect !== "" ?
  <Field value = "Full name" icon = {name} onChange = {OnChangeName} onClick = {OnClick} correctMessage = {registerStore.nameCorrect} correct = "true"/>
  : registerStore.nameError  !== ""?
  <Field value = "Full name" icon = {name} onChange = {OnChangeName} onClick = {OnClick} errorMessage = {registerStore.nameError} wrong = "true"/>
  :
  <Field value = "Full name" icon = {name} onChange = {OnChangeName} onClick = {OnClick}/>
   )
}
{
    ( registerStore.emailCorrect !== "" ?
  <Field value = "E-mail" icon = {email} onChange = {OnChangeEmail} onClick = {OnClick} correctMessage = {registerStore.emailCorrect} correct = "true"/>
   : registerStore.emailError !== "" ?
  <Field value = "E-mail" icon = {email} onChange = {OnChangeEmail} onClick = {OnClick} errorMessage = {registerStore.emailError} wrong = "true"/>
  :
  <Field value = "E-mail" icon = {email} onChange = {OnChangeEmail} onClick = {OnClick}/>
  )
}
  {
    ( registerStore.phoneCorrect !== "" ?
  <Field value = "Phone Number" icon = {phone} onChange = {OnChangePhone} onClick = {OnClick} correctMessage = {registerStore.phoneCorrect} correct = "true"/>
  : registerStore.phoneError !== "" ?
  <Field value = "Phone Number" icon = {phone} onChange = {OnChangePhone} onClick = {OnClick} errorMessage = {registerStore.phoneError} wrong = "true"/>
  :
  <Field value = "Phone Number" icon = {phone} onChange = {OnChangePhone} onClick = {OnClick}/>
  )
}
  {
    ( registerStore.passwordCorrect !== "" ?
  <Field value = "Password" icon = {password} onChange = {OnChangePass} onClick = {OnClick} correctMessage = {registerStore.passwordCorrect} correct = "true"/>
  : registerStore.passwordError !== "" ?
  <Field value = "Password" icon = {password} onChange = {OnChangePass} onClick = {OnClick} errorMessage = {registerStore.passwordError} wrong = "true"/>
  :
  <Field value = "Password" icon = {password} onChange = {OnChangePass} onClick = {OnClick}/>
  )
}
  {
    ( registerStore.repeatCorrect !== "" ?
  <Field value = "Repeat Password" icon = {password} onChange = {OnChangeRepeat} onClick = {OnClick} correctMessage = {registerStore.repeatCorrect} correct = "true"/>
  : registerStore.repeatError !== "" ?
  <Field value = "Repeat Password" icon = {password} onChange = {OnChangeRepeat} onClick = {OnClick} errorMessage = {registerStore.repeatError} wrong = "true"/>
  :
  <Field value = "Repeat Password" icon = {password} onChange = {OnChangeRepeat} onClick = {OnClick}/>
  )
}
  </form>
  {
    (registerStore.enableButton ?
    <Button value = "SIGN UP" type = "secondary" onclick = {onClickhandle} />
    :
    <Button value = "SIGN UP" type = "secondary" onclick = {onClickhandle} disable = "true"/>
    )
  }
  <Link className = {style.link} to = "/">Already have an account ?</Link>
  </div>
  </div>
  </>
  ));
}

export default Register;