import React from 'react';
import logo from '../../../../../assets/logo.svg'
import email from '../../../../../assets/icons/email.svg'
import password from '../../../../../assets/icons/password.svg'
import Field from '../../../../components/field/field'
import Button from '../../../../components/button/button'
import style from './login.module.css'
import {Link} from "react-router-dom"
import {loginStore} from "../../stores/loginStore"
import { useObserver } from 'mobx-react-lite';


function Login() {

  const onClickhandle = (e) => {
  loginStore.login();
  }

  const onEmailChange = (e) =>{
    console.log('heya');
    loginStore.putonNull();
    loginStore.checkEnable()
    loginStore.email = e.currentTarget.value;
    console.log(loginStore.email);
  }

  const OnPasswordChange = (e) =>{
    loginStore.putonNull();
    loginStore.password = e.currentTarget.value;
    loginStore.checkEnable()
  }



  
  return useObserver(() => (
  <>
  <div className = {style.login__container}>
  <div className = {style.login}>
  <img src = {logo} alt="logo"/>
  <h2 className = {style.title}> Time to connect !</h2>
  <form className = {style.form}>
  { loginStore.emailError ?
  <Field value = "Email" icon = {email} errorMessage = {loginStore.emailError} onChange = {onEmailChange} wrong = "true"/>
  : loginStore.emailCorrect ?
  <Field value = "Email" icon = {email} errorMessage = {loginStore.emailError} onChange = {onEmailChange} correct = "true"/>
  :
  <Field value = "Email" icon = {email} errorMessage = {loginStore.emailError} onChange = {onEmailChange}/>
  }
  { loginStore.passwordError ?
  <Field value = "Password" icon = {password} errorMessage = {loginStore.passwordError} onChange = {OnPasswordChange} wrong = "true" />
  :
  <Field value = "Password" icon = {password} errorMessage = {loginStore.passwordError} onChange = {OnPasswordChange}/>
  }
  </form>
  {
    (loginStore.enableButton ?
    <Button value = "LOG IN" type = "secondary" onclick = {onClickhandle} />
    :
    <Button value = "LOG IN" type = "secondary" onclick = {onClickhandle} disable = "true"/>
    )
  }
  <div className = {style.textContainer}>
  <p> Don't have an account ? <Link to= "/join"> Sign Up </Link></p>
  <p className = {style.centerPara}> Want to be a carrier </p>
  </div>
  </div>
  </div>
  </>
  ));
}

export default Login;