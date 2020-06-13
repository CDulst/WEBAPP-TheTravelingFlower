import React from 'react';
import logo from '../../../../../assets/logo.svg'
import email from '../../../../../assets/icons/email.svg'
import password from '../../../../../assets/icons/password.svg'
import name from '../../../../../assets/icons/name.svg'
import phone from '../../../../../assets/icons/phone.svg'
import Field from '../../../../components/field/field'
import Button from '../../../../components/button/button'



function Register() {
  return (
  <>
  <div>
  <h2> Register </h2>
  <p> Join our community</p>
  <form>
  <Field value = "Full name" icon = {name} />
  <Field value = "E-mail" icon = {email}/>
  <Field value = "Phone Number" icon = {phone}/>
  <Field value = "Password" icon = {password}/>
  <Field value = "Repeat Password" icon = {password}/>
  </form>
  <Button value = "SIGN UP" type = "secondary"/>
  <p><span> Sign Up </span></p>
  </div>
  </>
  );
}

export default Register;