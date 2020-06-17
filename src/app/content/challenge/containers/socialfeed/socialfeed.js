import React from 'react';
import {Link} from "react-router-dom";
import close from "../../../../../assets/feed/close.svg"
import FeedHeader from "../../components/feedHeader/feedHeader";
import Post from "../../components/post/post"
import SocialExample from "../../../../../assets/feed/post/social symbols/twitter.svg"
import ProfileExample from "../../../../../assets/feed/post/profile pics/example.svg"
import ContentExample from "../../../../../assets/feed/post/content pics/example.svg"


function SocialFeed() {
  return (
  <>
  <div>
  <img src = {close} alt = "close"/>
  <FeedHeader hashtags = "#TravelingFlower #FlowerAmsterdamTF"/>
  <Post pic = {ProfileExample} user = "Johnny Bravo" social = {SocialExample} text = "Ik ben een chad" content = {ContentExample} />
  </div>
  </>
  );
}

export default SocialFeed;