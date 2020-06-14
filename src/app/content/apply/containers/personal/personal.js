import React from 'react';
import style from './personal.module.css';
import Field from "../../../../components/field/field";



function Personal() {
  return (
  <>
  <div>
  <h2>Personal</h2>
  <div>
  <p> Full Name </p> 
  <Field/>
  </div>  
  <div>
  <p> Email </p> 
  <Field/>
  </div> 
  <div>
  <div>
  <p> Identification Number (ID) </p> 
  <Field/>
  </div> 
  <div>
  <p> First name </p> 
  <Field/>
  </div>
  </div>
  </div>
  </>
  );
}

export default Personal;
