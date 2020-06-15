import React from 'react';
import style from './header.module.css';



function Header({img,title,text}) {
  return (
  <>
  {
   ( img ?
  <img className = {style.image} src = {img}/>
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
