import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import NavItem from "./containers/navItem/navItem";
import Carrier from "../../../assets/navbar/carrier.svg";
import Challenge from "../../../assets/navbar/challenge.svg";
import Placeholder from "../../../assets/navbar/placeholder.svg";
import Tracker from "../../../assets/navbar/tracker.svg";
import TrackerActive from "../../../assets/navbar/trackerSelected.svg"
import style from "./index.module.css";
import {useEffect} from 'react';



function Sidebar() {
  return (
  <>

  <div className = {style.container}>
  <div className = {style.wrapper}>
  <div className = {`${style.active} ${style.activeTR}`}>
  <img className = {`${style.activeImage} ${style.activeImageCenter}`} src = {TrackerActive} alt = "hello"/>
  </div>
  <div className = {`${style.navWrapper}`}>
  <NavItem text = "Tracking" icon = {Tracker} link = {ROUTES.tracker} active = "true"/>
  <NavItem text = "Challenge" icon = {Challenge} link = {ROUTES.challenge}/>
  <NavItem text = "Carrier" icon = {Carrier} link = {ROUTES.carriers}/>
  <NavItem text = "Account" icon = {Placeholder} link = {ROUTES.settings}/>
  </div>
  
  </div>
  </div>
  </>
  );
}

export default Sidebar;
