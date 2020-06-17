import React from 'react';
import {Link} from "react-router-dom";
import style from "./post.module.css"


function Post({pic, user,social,text,content}) {
  return (
  <>
  <div>
  <div>
  <div>
  <img src = {pic} alt = "pic"/>
  <p> {user} </p>
  </div>
  <img src = {social} alt = "social" />
  </div>
  <p> {text} </p>
  <img className = {style.image} src = {content} alt = "contant"/>
  </div>
  </>
  );
}

export default Post;