import React from 'react';
import style from './route.module.css';
import {rootStore} from "../../../../../stores"
import personalStore from "../../stores/personal";
import { useObserver } from 'mobx-react-lite';

function Rout() {

const handleChange = (e) => {
personalStore.change("route",e.currentTarget.value);
}

  return useObserver(() =>(
        <>
<div>
<div>
<p> Choose your route </p> 
<select onChange = {e => handleChange(e)} className={style.dropDown}>
{
rootStore.routeStore.routes.map(route => (
route.status === "awaiting" ?
<option  value={route.id}> 
{route.startName} - {route.endName}
</option>
:
<>
</>
))

}
</select>
</div> 
</div>
</>
  ));
}

export default Rout;