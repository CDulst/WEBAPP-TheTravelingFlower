import React from 'react';
import {Link} from "react-router-dom";
import style from "./feedHeader.module.css"


function FeedHeader({hashtags}) {
  return (
  <>
  <div className = {style.container}>
  <h3 className = {style.hidden}> Feed </h3>
  <p className = {style.part}> Participate on social media</p>
  <p className = {style.use}> USE <span className = {style.hashtags}> {hashtags} </span> </p>
  </div>
  </>
  );
}

export default FeedHeader;