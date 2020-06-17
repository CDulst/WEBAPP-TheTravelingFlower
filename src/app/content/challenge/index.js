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

function Challenge() {
    useEffect(() => {
        uiStore.setPage("challenge")
      });
  return (
  <>
  <div >
  <Header hashtags = "#TheTravelingFlower #TulipAmsterdamTF"/>
  <Assignment/>
  <Involvement/>
  <Progress/>
  <Progress/>
  <SocialFeed/>
  </div>
  </>
  );
}

export default Challenge;
