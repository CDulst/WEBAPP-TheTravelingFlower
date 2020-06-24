import React from 'react';
import close from "../../../../../assets/feed/close.svg"
import FeedHeader from "../../components/feedHeader/feedHeader";
import Post from "../../components/post/post"
import Twitter from "../../../../../assets/feed/post/social symbols/twitter.svg"
import Instagram from "../../../../../assets/feed/post/social symbols/instagram.svg"
import ProfileExample from "../../../../../assets/feed/post/profile pics/example.svg"
import ContentExample from "../../../../../assets/feed/post/content pics/example.png"
import uiChallenge from "../../stores/uiStore";
import style from "./socialfeed.module.css";
import {rootStore} from "../../../../../stores/index";
import { useObserver } from 'mobx-react-lite';


function SocialFeed() {
  const handleOnClick = (e) => {
    uiChallenge.UIIn();
  }


  
  return useObserver(() => (
  <>
  <div className = {( uiChallenge.uiOut ? `${style.container} ${style.positionIn}` : `${style.container} ${style.positionOut}` ) }>
  <img onClick = {e => handleOnClick()} className = {style.close} src = {close} alt = "close"/>
  <FeedHeader hashtags = "#TravelingFlower #FlowerAmsterdamTF"/>
  <div className = {style.postWrapper2}>
  {
  rootStore.socialPostStore.posts.map(post => (
<Post key={post.id} pic = {post.pic} user = {post.userName} social = {(post.type === "Twitter" ? Twitter : Instagram)} text = {`${post.title} #TheTravelingFlower ${post.hashTag}`} content = {post.content} /> 
  ))
  }
  </div>
  </div>
  </>
  ));
}

export default SocialFeed;