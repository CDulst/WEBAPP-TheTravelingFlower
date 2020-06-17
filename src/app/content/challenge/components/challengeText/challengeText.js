import React from 'react';
import {Link} from "react-router-dom";



function ChallengeText({icon,title,flag,text}) {
  return (
  <>
  <div>
  <img src = {icon}/>
  <div>
  <p>{title}</p>
  <img src = {flag}/>
  </div>
  <p>{text}</p>
  </div>
  </>
  );
}

export default ChallengeText;