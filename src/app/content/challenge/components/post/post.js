import React from 'react';
import {Link} from "react-router-dom";
import style from "./post.module.css"


function Post({pic, user,social,text,content}) {
  return (
  <>
  <div class = {style.content}>
  <div className = {style.container}>
  <div className = {style.profileWrapper}>
  <img src = {pic} alt = "pic"/>
  <p className = {style.user}> {user} </p>
  </div>
  <img className = {style.social} src = {social} alt = "social" />
  </div>
  <p className = {style.text}> {text} </p>
  <img className = {style.image} src = {content} alt = "contant"/>
  </div>
  </>
  );
}

export default Post;