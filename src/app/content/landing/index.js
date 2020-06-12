import React from 'react';
import {Switch, Route} from "react-router-dom";
import ROUTES from "./routes/index";
import {useEffect} from 'react';
import uiStore from '../../../uiStore'
import VideoScreen from './containers/videoscreen/videoscreen';
import Login from './containers/login/login';
import Register from "./containers/register/register";


function Landing() {
    useEffect(() => {
        uiStore.setPage("landing")
      });
  return (
  <>
  <div>
  <VideoScreen/>
  <div>
  <Login/>
  </div>
  </div>
  </>
  );
}

export default Landing;
