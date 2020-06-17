import React from 'react';
import {Link} from "react-router-dom";



function FeedHeader({hashtag}) {
  return (
  <>
  <div>
  <h3> Feed </h3>
  <p> Participate on social media</p>
  <p> Use <span> {hashtag} </span> </p>
  </div>
  </>
  );
}

export default FeedHeader;