import React from 'react';
import style from "./field.module.css"


function Field({value,icon,width,border,errorMessage,onChange,correct,wrong}) {
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

  <input onChange = {e =>onChange(e)}  className = {style.input} type = {(value === "Password" ? "password" : "text")} placeholder = {value} style = {(correct ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`green solid 2px`} : wrong ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`red solid 2px`} : {backgroundImage: `url(${icon})`, width: `${width}`, border:`var(--colorSecondary) ${border} solid`})}/>
 
  </>
  );
}

export default Field;