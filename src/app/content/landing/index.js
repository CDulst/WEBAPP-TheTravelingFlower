import React from 'react';
import {Switch, Route} from "react-router-dom";
import ROUTES from "./routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore';
import VideoScreen from './containers/videoscreen/videoscreen';
import Login from './containers/login/login';
import Register from "./containers/register/register";
import style from "./index.module.css";


function Landing() {
    useEffect(() => {
        uiStore.setPage("landing")
      });
  return (
  <>
  <div className = {style.landing__container}>
  <VideoScreen/>
  <div className = {style.rightSide}>
  <Login/>
  <Register/>
  </div>
  </div>
  </>
  );
}

export default Landing;
