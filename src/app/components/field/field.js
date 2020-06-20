import React from 'react';
import style from "./field.module.css"


function Field({value,icon,width,border,errorMessage,onChange}) {
  return (
  <>
  {
  (errorMessage?
  <p className = {style.errorMessage}>{errorMessage}</p>
  :
  <>
  </>
  )
}
  <input onChange = {e => onChange(e)}  className = {style.input} type = {(value === "Password" ? "password" : "text")} placeholder = {value} style = {{backgroundImage: `url(${icon})`, width: `${width}`, border:`var(--colorSecondary) ${border} solid`}}/> 
  </>
  );
}

export default Field;