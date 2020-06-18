import React, {useState} from 'react';
import {Link} from "react-router-dom";
import arrow from '../../../../../assets/settings/arrow.svg'
import Button from '../../../../components/button/button'
import style from "./setting.module.css"


function Setting({title,value}) {
  const [editing,setEditing] = useState(false);
  return (
  <>
  <div className = {style.container}>
  <p>{title}</p>
  {(!editing ?
  <>
  <div>
  <p className = {style.value}>{value}</p>
  </div>
  <img src = {arrow} alt = "arrow"/>
  </>
  :
  <div>
  <input type = "text" />
  <Button value = "SAVE" type = "secondary"/>
  </div>
  )}
  </div>
  </>
  );
}


export default Setting;