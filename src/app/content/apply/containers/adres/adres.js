import React from 'react';
import style from './adres.module.css';
import Field from "../../../../components/field/field";



function Adres() {
  return (
  <>
  <div>
  <h2>Adres</h2>
  <div>
  <p> Streetname </p> 
  <Field/>
  </div>  
  <div>
  <div>
  <p> Nr. </p> 
  <Field/>
  </div> 
  <div>
  <p> Postal Code </p> 
  <Field/>
  </div>
  </div>
  <div>
  <p> Country </p> 
  <Field/>
  </div> 
  </div>
  </>
  );
}

export default Adres;
