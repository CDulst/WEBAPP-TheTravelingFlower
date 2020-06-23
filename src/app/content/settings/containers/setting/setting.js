import React, {useState} from 'react';
import arrow from '../../../../../assets/settings/arrow.svg'
import Button from '../../../../components/button/button'
import style from "./setting.module.css"
import Field from '../../../../components/field/field'
import { Input } from '@material-ui/core';
import { rootStore } from '../../../../../stores';
import uiStore from '../../../../../UiStore';



function Setting({title,value,edit}) {
  const [editing, setediting] = useState(false);
  const [Value, setvalue] = useState(value);
  const handleClick = (e) => {
  setediting();
  rootStore.uiStore.changeCurrentUser(edit,Value);
  rootStore.userStore.createUser(rootStore.uiStore.currentUser);
  }

  const onChange = (e) => {
  setvalue(e.currentTarget.value);
  }


  return (
  <>
  <div className = {style.container}>
  <p>{title}</p>
  <>
  {(!editing ?
  <>
  <div>
  <p className = {style.value}>{value}</p>
  </div>
   <div className = {style.editContainer} onClick = {setediting}>
   <p className = {style.editN}>Edit {edit}</p>
   <img src = {arrow} alt = "arrow"/>
   </div>
   </>
  :
  <>
  <div className = {style.changeWrapper}>
  <div>
  <input className = {style.input} type = "text" value = {Value} onChange = {e => onChange(e)}/>
</div>
 <div>
 <button className = {style.button} onClick = {e => handleClick(e)}>Save</button>
 </div>
 </div>
 </>
  )}
 
  </>
  </div>
  </>
  );
}


export default Setting;