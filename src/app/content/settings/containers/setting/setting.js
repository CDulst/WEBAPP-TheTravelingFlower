import React, {useState} from 'react';
import {Link} from "react-router-dom";
import arrow from '../../../../../assets/settings/arrow.svg'
import Button from '../../../../components/button/button'

const [editing,setEditing] = useState(false);

function Setting({title,value}) {
  return (
  <>
  <div>
  <p>{title}</p>
  {(!editing ?
  <>
  <div>
  <p>{value}</p>
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