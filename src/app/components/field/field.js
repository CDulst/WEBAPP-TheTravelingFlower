import React from 'react';
import style from "./field.module.css"


function Field({value,icon,width,validation, border}) {
  return (
  <>

  <input className = {style.input} type = {(value === "Password" ? "password" : "text")} placeholder = {value} style = {{backgroundImage: `url(${icon})`, width: `${width}`, border:`var(--colorSecondary) ${border} solid`}}/> 

  </>
  );
}

export default Field;