import React from 'react';
import style from './popupIcon.module.css';

const popupIcon = ({icon}) => {
    return (
        <div className={style.popupIcon}>
            <img src={icon} alt="icon"></img>
        </div>
    );
};

export default popupIcon;