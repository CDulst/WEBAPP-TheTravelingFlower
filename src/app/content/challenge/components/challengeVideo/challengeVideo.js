import React from 'react';
import {Link} from "react-router-dom";
import {Play} from "../../../../../assets/Play.svg"


function ChallengeVideo({video}) {
  return (
  <>
  <div>
  <video width="320" height="240" controls>
  <source src={video} type="video/mp4"/>
  <source src={video} type="video/ogg"/>
  your browser does not support the video tag.
  </video>
  <div>
  {/*<img src = "play" alt = "play"/>*/}
  </div>
  </div>
  </>
  );
}

export default ChallengeVideo;