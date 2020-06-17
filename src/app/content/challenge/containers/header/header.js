import React from 'react';
import {Link} from "react-router-dom";
import icon from "../../../../../assets/challenge/icon.svg"
import question from "../../../../../assets/challenge/question.png"
import style from './header.module.css'


function Header({hashtags}) {
  return (
  <>
  <Link to = "challenge/explainer" className = {style.question}>
  <img classname = {style.questionImage} src = {question} alt = "question"/>
  </Link>
  <div className={style.header}>
  <img className = {style.image} src = {icon} alt = "icon"/>
  <div>
  <h3 className = {style.title}> Today's Challenge </h3>
  <p className = {style.para}> USE <span className = {style.hashtags}>{hashtags}</span></p>
  </div>
  </div>
  </>
  );
}

export default Header;