import React from 'react';
import style from './button.module.css';


function Button({value,type,disable}) {
  return (
  <>
  {
  ( disable ?
  <button className = {`${style.disabled} ${style.button}`}  disabled>{value}</button>
  :
  <button className = {style.button} style = {(type === "primary" ? {backgroundColor: "black"} : {backgroundColor: "blue"})}>{value}</button>
  ) 
}
  </>
  );
}

export default Button;
