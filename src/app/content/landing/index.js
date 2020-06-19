import React from 'react';
import {Switch, Route} from "react-router-dom";
import {useEffect} from 'react';
import uiStore from '../../../UiStore';
import VideoScreen from './containers/videoscreen/videoscreen';
import Login from './containers/login/login';
import Register from "./containers/register/register";
import style from "./index.module.css";
import arrow from '../../../assets/Arrow.svg'
import {useObserver} from 'mobx-react-lite';
import uiLanding from "./uiStore";


function Landing() {
    useEffect(() => {
        uiStore.setPage("landing")
      });
      const handleClick= e => {
        uiLanding.UIIn();
        console.log(uiLanding.uiOut);
        console.log("hello");
        }
  return useObserver(() => (
  <>
  <div className = {style.landing__container}>
  <VideoScreen/>
  <div></div>
  <div className =  {( uiLanding.uiOut ? `${style.rightSide} ${style.out}` : !uiLanding.uiOut ? `${style.rightSide} ${style.in}` : style.rightSide )}>
  <p onClick = {e => handleClick(e)}><img className = {style.arrow} src = {arrow} alt="arrow"/></p>
  <Switch>
  <Route path = "/build/join">
  <Register/>
  </Route>
  <Route path = "/">
  <Login/>
  </Route>
  </Switch>
  </div>
  </div>
  </>
  ));
}

export default Landing;
