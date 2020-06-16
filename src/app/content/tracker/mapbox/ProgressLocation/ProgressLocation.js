import React from 'react';
import style from './ProgressLocation.module.css'
import Progress from '../../../../components/progressbar/progressbar'
import indicator from '../../../../../assets/tracker/pink_flower.png'

const ProgressLocation = () => {
    return (
        
        <div className={style.progress}>
            <div className={style.indicator} style={{left: "20%"}}>
                <img src={indicator} alt="indicator"></img>
            </div>
            <Progress percentage="20" />
        </div>
    );
};

export default ProgressLocation;