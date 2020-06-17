import React from 'react';
import {Link} from "react-router-dom";
import style from './involvement.module.css'
import involvementFlower from '../../../../../assets/challenge/challengeFlower.png'



function Involvement() {
  return (
  <>
    <div className={style.involvement__container}>
      <img src={involvementFlower} className={style.involvementPhoto} alt="involvement flower"></img>
      
        <span className={style.counter}>$11199.8</span>
      
    </div>
  </>
  );
}

export default Involvement;