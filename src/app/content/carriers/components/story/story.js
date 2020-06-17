import React from 'react';
import {Link} from "react-router-dom";
import style from './story.module.css'



function Story({title, date, location, content, image}) {
  return (
  <>
    <div className={style.journey__container}>
      <div>
        <p>{`${location} ${date}`}</p>
        <h2>{title}</h2>
      </div>
      <img src={image} alt="journeyPhoto"></img>
      <p>{content}</p>
    </div>
  </>
  );
}

export default Story;