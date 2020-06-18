import React from 'react';
import style from './popup.module.css';
import Button from '../button/button';


function Popup({title,text,image}) {
  return (
  <>
<div className={style.popupWrapper}>
  <p className={style.popup__title}> {title} </p>
  <p className={style.popup__paragraph}> {text} </p>
  <img className={style.popup__image} src = {image} alt="popup icon"/>
  <Button value = "I got it" type = "secondary"/>
</div>
  </>
  );
}

export default Popup;
