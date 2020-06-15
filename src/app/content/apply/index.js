import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "../../../routes/index";
import style from "./index.module.css"
import {useEffect} from 'react';
import uiStore from '../../../UiStore';
import Header from './containers/header/header';
import ProgressBar from "./containers/progressBar/progressBar";
import Personal from './containers/personal/personal';
import Button from "../../components/button/button";
import Congrats from '../../../assets/apply/congrats.svg';

function Apply() {
    useEffect(() => {
        uiStore.setPage("apply")
      });
  return (
  <>
  <div className = {style.container}>
  <div className = {style.container__wrapper}>
  <div className = {style.wrapper}>
  <div className = {style.progressWrapper}>
  <ProgressBar/>
  </div>
  <div className = {style.underground}>
  <Header title = "Personal Information" text = "Once selected, we will need this to make a profile about you as a carrier."/>
  <Personal/>
  <Button className = {style.button} value = "next step" type= "secondary"/>
  </div>
  </div>
  </div>
  </div>
  </>
  );
}

export default Apply;
