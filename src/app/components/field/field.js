import React from 'react';
import style from "./field.module.css"

function Field({value,icon,width,onValue,border,errorMessage,correctMessage,onChange,onClick,onEnter,correct,wrong}) {
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
      <input value = {(onValue ? onValue : null)} onChange = {e =>onChange(e)} onClick = {e => onClick(e)}  className = {style.input} type = {(value === "Password" ? "password" : value === "Repeat Password" ? "password" : "text")} placeholder = {value} style = {(correct ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`green solid 2px`} : wrong ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`red solid 2px`} : {backgroundImage: `url(${icon})`, width: `${width}`, border:`var(--colorSecondary) ${border} solid`})}/>
      :
      <input value = {(onValue ? onValue : null)} onChange = {e =>onChange(e)}  className = {style.input} type = {(value === "Password" ? "password" : value === "Repeat Password" ? "password" : "text")} placeholder = {value} style = {(correct ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`green solid 2px`} : wrong ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`red solid 2px`} : {backgroundImage: `url(${icon})`, width: `${width}`, border:`var(--colorSecondary) ${border} solid`})}/>
    )
  :
    onEnter ?
    <input value = {(onValue ? onValue : null)} onKeyDown = {e => onEnter(e)} className = {style.input} type = {(value === "Password" ? "password" : value === "Repeat Password" ? "password" : "text")} placeholder = {value} style = {(correct ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`green solid 2px`} : wrong ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`red solid 2px`} : {backgroundImage: `url(${icon})`, width: `${width}`, border:`var(--colorSecondary) ${border} solid`})}/>
    :
  <input value = {(onValue ? onValue : null)} className = {style.input} type = {(value === "Password" ? "password" : value === "Repeat Password" ? "password" : "text")} placeholder = {value} style = {(correct ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`green solid 2px`} : wrong ? {backgroundImage: `url(${icon})`, width: `${width}`, border:`red solid 2px`} : {backgroundImage: `url(${icon})`, width: `${width}`, border:`var(--colorSecondary) ${border} solid`})}/>
  )
}
  </>
  );
}

export default Field;