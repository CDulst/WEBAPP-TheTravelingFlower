import React from 'react';
import style from './popupIcon.module.css';

const PopupIcon = ({icon, direction, text, onClick}) => {
    return (
        
        (!text ?
        <div style={{transform: `scaleX(${direction})`}} className={style.popupIcon}>
            <img   src={icon} alt="icon"></img>
        </div>
        :
        <div style={{transform: `scaleX(${direction})`}} className={style.feedIcon}>
        <div className = {style.wrapper}>
        <img className={style.iconImage}  src={icon} alt="icon"/>
        <p className = {style.text}> Live feed </p>
        </div>
    </div>
        )
        
    );
};

export default PopupIcon;