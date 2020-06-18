import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Slider from '@material-ui/core/Slider'
import style from './involvementSlider.module.css'



function InvolvementSlider({item1, item2, text, handleChange, orientation, height, classname, direction}) {

  const [value, setValue] = useState(50)

  handleChange = (e, newValue) => {
    setValue(newValue);
  }

  return (
  <>
<div className={style.slider__container}>
  <div className={style.slider}>
    <p className={style.paragraph}>{item1}</p>
    
    <Slider style={{height: `${height}`}} orientation={orientation} value={value} onChange={handleChange} />
    <p className={style.paragraph}>{item2}</p>
  </div>
  <p>{text}</p>
</div>
  </>
  );
}

export default InvolvementSlider;