import React from 'react';
import style from './ProgressLocation.module.css'
import Progress from '../../../../components/progressbar/progressbar'
import indicator from '../../../../../assets/tracker/pink_flower.png'
import start from '../../../../../assets/tracker/start.png'
import finish from '../../../../../assets/tracker/finish.png'
import textballoon from '../../../../../assets/tracker/text_balloon.svg'

const ProgressLocation = () => {
    return (
        
        <div className={style.progress}>
            <div className={style.indicator} style={{left: "20%"}}>
                <img src={indicator} alt="indicator"></img>
                <div className={style.textballoon}>#Amsterdam</div>
            </div>
            <div className={style.indicator} style={{left: "6%", bottom: "4rem"}}>
                <img src={start} alt="indicator"></img>
            
            </div>
            <div className={style.indicator} style={{left: "96%", bottom: "3.1rem"}}>
                <img src={finish} alt="indicator"></img>
               
            </div>
            <Progress percentage="20" />
        </div>
    );
};

export default ProgressLocation;