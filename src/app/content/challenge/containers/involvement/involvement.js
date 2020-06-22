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
  <p className = {(!rootStore.serverValuesStore.donationController.rightSum ? `${style.added} ${style.left} ${style.in}` : `${style.added} ${style.left} ${style.out}`)}> + € {(rootStore.serverValuesStore.donationController.changeStatic ? rootStore.serverValuesStore.donationController.changeStatic : " ")}</p>
        <p className = {(!rootStore.serverValuesStore.donationController.leftSum ? `${style.added} ${style.right} ${style.in}` : `${style.added} ${style.right} ${style.out}`)}> + €{(rootStore.serverValuesStore.donationController.changeStatic ? rootStore.serverValuesStore.donationController.changeStatic: "")}</p>
    </div>
  </>
  ));
}

export default Involvement;