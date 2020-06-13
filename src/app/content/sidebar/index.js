import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';


function Sidebar() {
  return (
  <>
  <p>---------------SideBar-------------------</p>
  <br/>
  <Link to = {ROUTES.tracker}> Go to tracker </Link><br/>
  <Link to = {ROUTES.challenge}> Go to challenge </Link><br/>
  <Link to = {ROUTES.carriers}> Go to carriers </Link><br/>
  <Link to = {ROUTES.settings}> Go to settings </Link><br/>
  </>
  );
}

export default Sidebar;
