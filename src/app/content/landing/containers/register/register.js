import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../../../assets/logo.svg'
import email from '../../../../../assets/icons/email.svg'
import password from '../../../../../assets/icons/password.svg'
import name from '../../../../../assets/icons/name.svg'
import phone from '../../../../../assets/icons/phone.svg'
import Field from '../../../../components/field/field'
import Button from '../../../../components/button/button'
import style from "./register.module.css"



function Register() {
  return (
  <>
  <div className = {style.register__container}>
  <div className = {style.register}>
  <h2 className = {style.title}> Join our community !</h2>
  <form className = {style.form}>
  <Field value = "Full name" icon = {name} />
  <Field value = "E-mail" icon = {email}/>
  <Field value = "Phone Number" icon = {phone}/>
  <Field value = "Password" icon = {password}/>
  <Field value = "Repeat Password" icon = {password}/>
  </form>
  <Button value = "SIGN UP" type = "secondary" disable = "true"/>
  <Link className = {style.link} to = "/">Already have an account ?</Link>
  </div>
  </div>
  </>
  );
}

export default Register;