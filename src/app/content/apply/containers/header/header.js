import React from 'react';
import style from './header.module.css';



function Header({img,title,text}) {
  return (
  <>
  {
   ( img ?
  <img src = {img} />
  :
  <>
  </>
   )
  }
  <h2> {title} </h2>
  <p> {text} </p>
  </>
  );
}

export default Header;
