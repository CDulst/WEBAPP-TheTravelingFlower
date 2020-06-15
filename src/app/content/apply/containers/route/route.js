import React from 'react';
import style from './route.module.css';
import Field from "../../../../components/field/field";



function Rout() {
    return (
        <>
<div>
<div>
<p> Choose your route </p> 
<select className={style.dropDown}>
<option value="option 1"> 
Brussel - Amsterdam
</option>
<option value="option 2">
Amsterdam - Berlin

</option>
<option value="option 3">

Berlin - Warschau

</option>
</select>
</div> 
</div>
</>
  );
}

export default Rout;