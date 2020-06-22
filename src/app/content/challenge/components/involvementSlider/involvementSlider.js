import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider'
import style from './involvementSlider.module.css'
import { useStore } from '../../../../../hooks';




function InvolvementSlider({item1, item2, text, handleChange, orientation, height, value, classname, direction}) {

  const {routeStore} = useStore();

  const s = 100/routeStore.routes.length


  return (
  <>
<div className={style.slider__container}>
  <div className={style.slider}>
    <p className={style.paragraph}>{item1}</p>
    
    <Slider step={s} style={{height: `${height}`}} orientation={orientation} value={value} onChange={handleChange} />
    <p className={style.paragraph}>{item2}</p>
  </div>
  <p>{text}</p>
</div>
  </>
  );
}

export default InvolvementSlider;