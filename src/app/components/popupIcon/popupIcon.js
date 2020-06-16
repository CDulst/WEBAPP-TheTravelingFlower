import React from 'react';
import style from './popupIcon.module.css';

const PopupIcon = ({icon, direction}) => {
    return (
        <div style={{transform: `scaleX(${direction})`}} className={style.popupIcon}>
            <img className={style.iconImage}  src={icon} alt="icon"></img>
        </div>
    );
};

export default PopupIcon;