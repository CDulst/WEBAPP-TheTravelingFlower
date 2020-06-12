import React from 'react';
import style from './button.module.css';


function Button({value,type}) {
  return (
  <>
  
  <button className = {style.button} style = {(type === "primary" ? {backgroundColor: "black"} : {backgroundColor: "blue"})}>{value}</button> 
  </>
  );
}

export default Button;
