import React from 'react';
import style from './adres.module.css';
import Field from "../../../../components/field/field";
import adresStore from "../../stores/adres"
import { useObserver } from 'mobx-react-lite';

const OnChangeStreet = (e) => {
  adresStore.change("streetname",e.currentTarget.value);
  adresStore.putonNull("streetname");
  adresStore.checkEnable()
  }
  const OnChangeNr= (e) => {
  console.log("hello");
  adresStore.change("streetnr",e.currentTarget.value);
  adresStore.putonNull("streetnr");
  }
  
  const OnChangePostal = (e) => {
    adresStore.change("postalcode",e.currentTarget.value);
  adresStore.putonNull("postalcode");
  }
  const OnChangeCountry = (e) => {
  console.log("pass")
  adresStore.change("country",e.currentTarget.value);
  adresStore.putonNull("country");
  adresStore.checkEnable()
  adresStore.checkfields();
  }
 
  const OnClick = (e) => {
    console.log("click");
    adresStore.checkfields();
    adresStore.checkEnable()
  }


function Adres() {
  return useObserver(() => (
  <>
  <div>
  <div className={style.adressWrapper}>
    
  <div className={style.spacer}>
  <p> Streetname </p> 
  {
  (adresStore.streetCorrect ?
  <Field value="Streetname" onClick = {OnClick} onValue = {adresStore.streetname} correct = "true" onChange = {OnChangeStreet}/>
  : adresStore.streetError !== "" ? 
  <Field value="Streetname" onClick = {OnClick} onValue = {adresStore.streetname} wrong = "true" errorMessage = {adresStore.streetError} onChange = {OnChangeStreet}/>
  :
  <Field value="Streetname" onClick = {OnClick} onValue = {adresStore.streetname}  onChange = {OnChangeStreet}/>
  )}
  </div>  
  
  <div>
  <p> Nr. </p> 
  {
  (adresStore.nrCorrect ?
  <Field value="number" onClick = {OnClick} onValue = {adresStore.streetnr} correct = "true" onChange = {OnChangeNr} width="8rem"/>
  : adresStore.nrError !== "" ? 
  <Field value="number" onClick = {OnClick} onValue = {adresStore.streetnr} wrong = "true" errorMessage = {adresStore.nrError} onChange = {OnChangeNr} width="8rem"/>
  :
  <Field value="number" onClick = {OnClick} onValue = {adresStore.streetnr}  onChange = {OnChangeNr} width="8rem"/>
  )}

  </div> 

  </div>

<div className={style.adressWrapper}>
  <div className={style.spacer}>
  <p> Postal Code </p> 
  {
  (adresStore.postalCorrect ?
  <Field onClick = {OnClick} onValue = {adresStore.postalcode} correct = "true" onChange = {OnChangePostal} value="1XXX" width="6rem"/>
  : adresStore.postalError !== "" ? 
  <Field value="1XXX"  onClick = {OnClick} onValue = {adresStore.postalcode} wrong = "true" errorMessage = {adresStore.postalError} onChange = {OnChangePostal} width="8rem"/>
  :
  <Field value="1XXX"  onClick = {OnClick} onValue = {adresStore.postalcode} onChange = {OnChangePostal}  width="8rem"/>
  )}
  </div>

  <div>
  <p> Country </p> 
  {
  (adresStore.countryCorrect ?
  <Field onClick = {OnClick} onValue = {adresStore.country} correct = "true" onChange = {OnChangeCountry}  value="Belgium, France, ..."/>
  : adresStore.countryError !== "" ? 
<Field value="1XXX"  onClick = {OnClick} onValue = {adresStore.country} wrong = "true" errorMessage = {adresStore.countryError} onChange = {OnChangeCountry} width="8rem"/>
  : 
<Field value="1XXX"  onClick = {OnClick} onValue = {adresStore.country} onChange = {OnChangeCountry}  width="8rem"/>
    )}
  </div> 
</div>
  </div>
  </>
  ));
}

export default Adres;
