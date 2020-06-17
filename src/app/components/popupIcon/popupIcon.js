import React from 'react';
import style from './popupIcon.module.css';
import {useEffect} from 'react';

const PopupIcon = ({icon, direction, text, click}) => {
   
    
    return (
        (!text ?
        <div  onClick = {e => click()} style={{transform: `scaleX(${direction})`}} className={style.popupIcon}>
            <img   src={icon} alt="icon"></img>
        </div>
        :
        <div onClick = {e => click()}   style={{transform: `scaleX(${direction})`}} className={style.feedIcon}>
        <div className = {style.wrapper}>
        <img  className={style.iconImage}  src={icon} alt="icon"/>
        <p className = {style.text}> Live feed </p>
        </div>
    </div>
        )
        
    );
};

export default PopupIcon;