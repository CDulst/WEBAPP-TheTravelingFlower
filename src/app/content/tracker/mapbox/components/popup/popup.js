import React from 'react';
import style from './popup.module.css';
import cross from '../../../../../../assets/feed/close.svg'
import uiTracker from '../../../stores/uiStore';

const Popupinfo = ({done, toGo}) => {
    const handleOnClick = (e) => {
        uiTracker.popupIn();
    }

    return (
        <div className={style.popup__container}>
            <img onClick = {e => handleOnClick()} src={cross} alt="close"></img>
            <p className={style.popupBold}>{`${done} Km done`}</p>
            <div>
                <p>From Brussels (BEL)</p>
                <p>to Yuchan (CHN)</p>
            </div>
        <p className={style.popupBold}>{`${toGo} To go`}</p>
        </div>
    );
};

export default Popupinfo;