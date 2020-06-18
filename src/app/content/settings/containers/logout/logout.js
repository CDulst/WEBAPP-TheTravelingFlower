import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../../../components/button/button"
import style from "./logout.module.css"

function Logout() {
  return (
  <>
  <p className = {style.logoutPara}> Do you want to log out ?</p>
  <Button value = "LOG OUT" type = "secondary"/>
  </>
  );
}

export default Logout;