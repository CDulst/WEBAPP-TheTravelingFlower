import React from 'react';
import Button from "../../../../components/button/button";
import style from "./logout.module.css";
import {Link} from "react-router-dom";
import {rootStore} from "../../../../../stores/index";

function Logout() {

  const onClick = (e) =>{
    console.log("logout");
    rootStore.uiStore.logoutUser();
  }


  return (
  <>
  <div className = {style.container}>
  <p className = {style.logoutPara}> Do you want to log out ?</p>
  <Link to = "/"><Button value = "LOG OUT" type = "secondary" onclick = {onClick}/></Link>
  </div>
  </>
  );
}

export default Logout;