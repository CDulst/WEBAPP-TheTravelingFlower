import React from 'react';
import ROUTES from "../../../routes/index";
import NavItem from "./containers/navItem/navItem";
import Carrier from "../../../assets/navbar/carrier.svg";
import Challenge from "../../../assets/navbar/challenge.svg";
import Placeholder from "../../../assets/navbar/placeholder.svg";
import Tracker from "../../../assets/navbar/tracker.svg";
import uiStore from "../../../UiStore";
import TrackerActive from "../../../assets/navbar/trackerSelected.svg"
import ChallengeActive from "../../../assets/navbar/challengeSelected.svg"
import CarrierActive from "../../../assets/navbar/carrierSelected.svg"
import {useObserver} from 'mobx-react-lite';
import {rootStore} from '../../../stores/index'
import style from "./index.module.css";



function Sidebar() {
  return useObserver(() => (
  <>
  <div className = {style.container}>
  <div className = {style.wrapper}>
  <div className = {(uiStore.activePage === "tracker" ? `${style.active} ${style.activeTR}` : uiStore.activePage === "challenge" ?  `${style.active} ${style.activeCH}`: uiStore.activePage === "carriers" ?  `${style.active} ${style.activeCA}` : `${style.active} ${style.activeAC}`)}>
  <img className = {`${style.activeImage} ${style.activeImageCenter}`} src = {(uiStore.activePage === "tracker" ? `${TrackerActive}` : uiStore.activePage === "challenge" ?  `${ChallengeActive}` : uiStore.activePage === "carriers" ? `${CarrierActive}` : `${(rootStore.uiStore.currentUser ? rootStore.uiStore.currentUser.avatar : "")}` )} alt = "hello"/>
  </div>
  <div className = {`${style.navWrapper}`}>
  <NavItem text = "Tracking" icon = {Tracker} link = {ROUTES.tracker} active = "true"/>
  <NavItem text = "Challenge" icon = {Challenge} link = {ROUTES.challenge}/>
  <NavItem text = "Carriers" icon = {Carrier} link = {ROUTES.carriers}/>
  <NavItem text = "Account" icon =  {(rootStore.uiStore.currentUser ? rootStore.uiStore.currentUser.avatar : "")} link = {ROUTES.settings}/>
  </div>
  </div>
  </div>
  </>
  ));
}

export default Sidebar;
