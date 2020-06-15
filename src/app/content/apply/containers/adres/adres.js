import React from 'react';
import style from './adres.module.css';
import Field from "../../../../components/field/field";



function Adres() {
  return (
  <>
  <div>
  <h2 className={style.AdressSubtitle}>Adres</h2>
  <div className={style.adressWrapper}>
    
  <div className={style.spacer}>
  <p> Streetname </p> 
  <Field value="Streetname"/>
  </div>  
  
  <div>
  <p> Nr. </p> 
  <Field value="Streetnumber"/>
  </div> 

  </div>

<div className={style.adressWrapper}>
  <div className={style.spacer}>
  <p> Postal Code </p> 
  <Field value="1XXX" width="6rem"/>
  </div>

  <div>
  <p> Country </p> 
  <Field value="Belgium, France, ..."/>
  </div> 
</div>
  </div>
  </>
  );
}

export default Adres;
