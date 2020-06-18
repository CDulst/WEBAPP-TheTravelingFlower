import React from 'react';
import Button from "../../../../components/button/button"
import style from "./logout.module.css"

function Logout() {
  return (
  <>
  <div className = {style.container}>
  <p className = {style.logoutPara}> Do you want to log out ?</p>
  <Button value = "LOG OUT" type = "secondary"/>
  </div>
  </>
  );
}

export default Logout;