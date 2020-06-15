import React from 'react';
import style from './route.module.css';
import Field from "../../../../components/field/field";



function Rout() {
    return (
        <>
<div>
<div>
<p> Choose your route </p> 
<select>
<option value="option 1"> 
<div>
<p>Available Route </p>
<p>Brussel - Amsterdam</p>
</div> 
</option>
<option value="option 2">
<div>
<p>Available Route </p>
<p>Amsterdam - Berlin</p>
</div> 
</option>
<option value="option 3">
<div>
<p>Available Route </p>
<p>Berlin - Warschau</p>
</div> 
</option>
</select>
<Field/>
</div> 
</div>
</>
  );
}

export default Rout;