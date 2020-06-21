import React from 'react';
import style from "./field.module.css"

function Field({value,icon,width,border,errorMessage,correctMessage,onChange,onClick,correct,wrong}) {
  return (
  <>
  {
  (errorMessage?
  <p className = {style.errorMessage} style = {{marginTop :"-0.8rem"}}>{errorMessage}  </p>
  : correctMessage?
  <p className  = {style.correctMessage} style = {{marginTop :"-0.8rem"}}>{correctMessage}</p>
  :
  <>
  </>
  )
}
{
  ( onChange ?
    (
      onClick ?
      <input onChange = {e =>onChange(e)} onClick = {e => onClick(e)}  className = {style.input} type = {(value === "Password" ? "password" : "text")} placeholder = {value} style = {(correct ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`green solid 2px`} : wrong ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`red solid 2px`} : {backgroundImage: `url(${icon})`, width: `${width}`, border:`var(--colorSecondary) ${border} solid`})}/>
      :
      <input onChange = {e =>onChange(e)}  className = {style.input} type = {(value === "Password" ? "password" : "text")} placeholder = {value} style = {(correct ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`green solid 2px`} : wrong ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`red solid 2px`} : {backgroundImage: `url(${icon})`, width: `${width}`, border:`var(--colorSecondary) ${border} solid`})}/>
    )
  :
  <input className = {style.input} type = {(value === "Password" ? "password" : value === "Repeat Password" ? "password" : "text")} placeholder = {value} style = {(correct ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`green solid 2px`} : wrong ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`red solid 2px`} : {backgroundImage: `url(${icon})`, width: `${width}`, border:`var(--colorSecondary) ${border} solid`})}/>
  )
}
  </>
  );
}

export default Field;