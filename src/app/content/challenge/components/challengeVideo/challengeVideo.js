import React from 'react';
import style from './challengeVideo.module.css'


function ChallengeVideo({video}) {
  return (
  <>
  <div className={style.videoContainer}>
  <video className={style.video}  controls>
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