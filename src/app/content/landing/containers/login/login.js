import React from 'react';
import logo from '../../../../../assets/logo.svg'
import email from '../../../../../assets/icons/email.svg'
import password from '../../../../../assets/icons/password.svg'
import Field from '../../../../components/field/field'
import Button from '../../../../components/button/button'
import style from './login.module.css'
import {Link} from "react-router-dom"


function Login() {
  return (
  <>
  <div className = {style.login__container}>
  <div className = {style.login}>
  <img src = {logo}/>
  <h2 className = {style.title}> Time to connect !</h2>
  <form className = {style.form}>
  <Field value = "Email" icon = {email} />
  <Field value = "Password" icon = {password}/> 
  </form>
  <Button value = "LOG IN" type = "secondary" disable = "true"/>
  <div className = {style.textContainer}>
  <p> Don't have an account ? <Link to= "/join"> Sign Up </Link></p>
  <p className = {style.centerPara}> Want to be a carrier </p>
  </div>
  </div>
  </div>
  </>
  );
}

export default Login;