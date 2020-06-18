import React from 'react';
import {useEffect} from 'react';
import uiStore from '../../../UiStore'
import Assignment from "./containers/assignment/assignment";
import Explainer from "./containers/explainer/explainer";
import Header from "./containers/header/header";
import Involvement from "./containers/involvement/involvement";
import Progress from "./containers/progress/progress";
import SocialFeed from "./containers/socialfeed/socialfeed";
import {Route,Switch} from "react-router-dom";
import FeedIcon from '../../../assets/challenge/feedIcon.svg'
import style from './index.module.css'
import PopupIcon from '../../components/popupIcon/popupIcon'
import uiChallenge from "./stores/uiStore";

function Challenge() {
    useEffect(() => {
        uiStore.setPage("challenge")
      });

      const handleOnClick = (e) => {
        uiChallenge.UIOut();
      }
  return (
  <>
  <div className={style.challenge__container}>
  <Switch>
  <Route path = "/challenge/explainer">
   <Explainer/>
   </Route>
  <Route path = "/challenge">
  <div className = {style.popUP}>
  <PopupIcon icon = {FeedIcon} direction = "-1" text = "Social Feed" click = {handleOnClick}/>
  </div>
  <Header hashtags = "#TheTravelingFlower #TulipAmsterdamTF"/>
  <Assignment/>
  <div className={style.involvement__container}>
  <Involvement/>
  </div>
  <div className={style.progress}>
  <Progress title="Distance untill next challenge" start="Amsterdam" end="Berlin" percentage="40"/>
  <Progress title="Challenge goal" start="$0" end="$5000" percentage="20"/>
  </div>
  <SocialFeed/>
  </Route>
  </Switch>
  </div>
  
  </>
  );
}

export default Challenge;
