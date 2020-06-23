import React from 'react';
import style from './challengeVideo.module.css'
import uiStore from '../../stores/uiStore';
import { useObserver } from 'mobx-react-lite';


function ChallengeVideo({video}) {
  console.log(uiStore.TextOut)
  return useObserver(() => (
  <>
  <div className={( uiStore.TextOut ? `${style.videoContainer} ${style.VideoDisplayNone }` : `${style.videoContainer} ${style.videoDisplayBlock}` )}>
  <video className={style.video}  controls>
  <source src="./videos/spiderman.mp4" type="video/mp4"/>
  <source src={video} type="video/ogg"/>
  your browser does not support the video tag.
  </video>
  <div>
  {/*<img src = "play" alt = "play"/>*/}
  </div>
  </div>
  </>
  ));
}

export default ChallengeVideo;