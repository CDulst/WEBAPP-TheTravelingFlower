import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Slider from '@material-ui/core/Slider'
import style from './involvementSlider.module.css'



function InvolvementSlider({item1, item2, text, handleChange}) {

  const [value, setValue] = useState(50)

  handleChange = (e, newValue) => {
    setValue(newValue);
  }

  return (
  <>
<div className={style.slider__container}>
  <div className={style.slider}>
    <Slider className={style.sliderComponent} value={value} onChange={handleChange} />
  </div>
</div>
  </>
  );
}

export default InvolvementSlider;