import React from 'react';
import style from './header.module.css';
import {useEffect} from "react";
import uiApply from "../../stores/uiStore";

function Header({img,title,text}) {

  useEffect(() => {
  if (title === "Congratulations"){
    uiApply.setCurrentStep("finished");
  }
  if (title === "Send us your motivation"){
    uiApply.setCurrentStep("motivation");
  }
  if (title === "Choose Your Route"){
    uiApply.setCurrentStep("route");
  }
  if (title === "Adress"){
    uiApply.setCurrentStep("adres");
  }
  if (title === "Personal Information"){
    uiApply.setCurrentStep("personal");
  }
  if (title === "Become a carrier"){
  uiApply.setCurrentStep("landing")
  }
  });
  return (
  <>
  {
   ( img ?
  <img className = {style.image} src = {img} alt="title_image"/>
  :
  <>
  </>
   )
  }
  <h2 className = {style.title}> {title} </h2>
  <p className = {style.text}> {text} </p>
  
  </>
  );
}

export default Header;
