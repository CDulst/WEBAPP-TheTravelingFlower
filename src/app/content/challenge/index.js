import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import Assignment from "./containers/assignment/assignment";
import Explainer from "./containers/explainer/explainer";
import Header from "./containers/header/header";
import Involvement from "./containers/involvement/involvement";
import Progress from "./containers/progress/progress";
import SocialFeed from "./containers/socialfeed/socialfeed";
import style from './index.module.css'

function Challenge() {
    useEffect(() => {
        uiStore.setPage("challenge")
      });
  return (
  <>
  <div className={style.challenge__container}>
  <Header hashtags = "#TheTravelingFlower #TulipAmsterdamTF"/>
  <Assignment/>
  <div className={style.involvement__container}>
  <Involvement/>
  </div>
  <div className={style.progress}>
  <Progress title="Distance untill next challenge" start="Amsterdam" end="Berlin" percentage="40"/>
  <Progress title="Challenge goal" start="$0" end="$5000" percentage="20"/>
  </div>
    {/*<SocialFeed/>*/}
  </div>
  </>
  );
}

export default Challenge;
