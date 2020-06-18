import React from 'react';
import style from './involvement.module.css'
import involvementFlower from '../../../../../assets/challenge/challengeFlower.png'



function Involvement() {
  return (
  <>
    <div className={style.involvement__container}>
      <img src={involvementFlower} className={style.involvementPhoto} alt="involvement flower"></img>
      
        <span className={style.counter}>$11199.88</span>
      
    </div>
  </>
  );
}

export default Involvement;