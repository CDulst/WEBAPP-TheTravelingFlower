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
import FeedIcon from '../../../assets/challenge/feedIcon.svg'
import style from './index.module.css'
import PopupIcon from '../../components/popupIcon/popupIcon'

function Challenge() {
    useEffect(() => {
        uiStore.setPage("challenge")
      });
  return (
  <>
  <div className={style.challenge__container}>
  <div className = {style.popUP}>
  <PopupIcon icon = {FeedIcon} direction = "-1" text = "Social Feed"/>
  </div>
  <Header hashtags = "#TheTravelingFlower #TulipAmsterdamTF"/>
  <Assignment/>
  <div className={style.involvement__container}>
  <Involvement/>
  </div>
  <div className={style.progress}>
  <Progress/>
  <Progress/>
  </div>
    {/*<SocialFeed/>*/}
  </div>
  </>
  );
}

export default Challenge;
