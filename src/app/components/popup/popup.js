import React from 'react';
import style from './popup.module.css';
import Button from '../button/button';


function Popup({title,text,image}) {
  return (
  <>
  <p> {title} </p>
  <p> {text} </p>
  <img src = {image}/>
  <Button value = "I got it" type = "secondary"/>
  </>
  );
}

export default Popup;
