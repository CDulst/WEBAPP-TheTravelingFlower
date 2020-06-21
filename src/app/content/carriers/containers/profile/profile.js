import React from 'react';
import style from './profile.module.css'
import instagram from '../../../../../assets/social/instagram.svg'
import twitter from '../../../../../assets/social/twitter.svg'
import facebook from '../../../../../assets/social/facebook.svg'



function Profile({pic, name, flag, age, transport,bio}) {
  return (
  <>
  <div className={style.informationContainer}>
    <img className={style.carrierPage__profilePic} src={pic} alt="carrierphoto"></img>
      <div className={style.nameAndFlag}>
        <p className={style.nameCarrierInfo}>{name}</p>
        <img className={style.carrierPageFlag} src={flag} alt="carrierflag"></img>
      </div>

    
      <article className={style.informationContainer2}>
        <p className={style.title__personalInfo}>Personal info</p>
    <div className={style.personalInfoSection1}>
      <div className={style.personalInfoWrapper}>
        <p className={style.label}>Age:</p>
        <p>{age}</p>
      </div>
      <div className={style.personalInfoWrapper}>
        <p className={style.label}>transport:</p>
        <p>{transport}</p>
      </div>
      </div>
      <div className={style.personalInfoWrapperBio}>
        <p className={style.label}>Bio:</p>
        <p className={style.textBio}>{bio}</p>{/*Tom is a young nature activist. He likes to spend his free time in his garden. He montly supports the charity "green peace" his goals in the future is to make sure the world changes to be more green!*/}
      </div>

      </article>

    <div className={style.socialMediaWrapper}>
    
      <div className={style.socialMediaIcons}>
        <img className={style.socialMediaIcon} src={instagram} alt="instagram"></img>
        <img className={style.socialMediaIcon} src={twitter} alt="twitter"></img>
        <img className={style.socialMediaIcon} src={facebook} alt="facebook"></img>
      </div>
    

      <p>#TheTravelingFlower</p>
    </div>
   
  </div>
  </>
  );
}

export default Profile;