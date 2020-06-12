import React from 'react';
import logo from '../../../../../assets/logo.svg'
import email from '../../../../../assets/icons/email.svg'
import password from '../../../../../assets/icons/password.svg'
import Field from '../../../../components/field/field'
import Button from '../../../../components/button/button'


function Login() {
  return (
  <>
  <div>
  <div>
  <h2> Login </h2>
  <img src = {logo}/>
  <p> Time to connect !</p>
  </div>
  <form>
  <Field value = "Email" icon = {email} />
  <Field value = "Password" icon = {password}/> 
  </form>
  <Button value = "LOG IN" type = "secondary"/>
  <div>
  <p> Don't have an account ? <span> Sign Up </span></p>
  <p> Want to be a carrier </p>
  </div>
  </div>
  </>
  );
}

export default Login;