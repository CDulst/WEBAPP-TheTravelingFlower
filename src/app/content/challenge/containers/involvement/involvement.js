import React from 'react';
import style from './involvement.module.css'
import involvementFlower from '../../../../../assets/challenge/challengeFlower.png'
import {rootStore} from "../../../../../stores";
import { useObserver } from 'mobx-react-lite';

function Involvement() {
  return useObserver(() =>(
  <>
    <div className={style.involvement__container}>
      <img src={involvementFlower} className={style.involvementPhoto} alt="involvement flower"></img>
      
        <span className={style.counter}>€{( rootStore.serverValuesStore.donationController.currentdonation !== "" ? rootStore.serverValuesStore.donationController.currentdonation.toFixed(2) : "")}</span>
      
    </div>
  </>
  ));
}

export default Involvement;