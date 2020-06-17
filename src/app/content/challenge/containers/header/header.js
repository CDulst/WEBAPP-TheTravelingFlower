import React from 'react';
import {Link} from "react-router-dom";
import icon from "../../../../../assets/challenge/icon.svg"
import style from './header.module.css'


function Header({hashtags}) {
  return (
  <>
  <div className={style.header}>
  <img src = {icon} alt = "icon"/>
  <div>
  <h3> Location challenge </h3>
  <p> USE <span>{hashtags}</span></p>
  </div>
  </div>
  </>
  );
}

export default Header;