import React from 'react';
import style from './popup.module.css';
import cross from '../../../../../../assets/feed/close.svg'

const Popupinfo = ({done, toGo}) => {
    return (
        <div className={style.popup__container}>
            <img src={cross} alt="close"></img>
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