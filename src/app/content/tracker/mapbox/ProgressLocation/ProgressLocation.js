import React from 'react';
import style from './ProgressLocation.module.css'
import Progress from '../../../../components/progressbar/progressbar'

const ProgressLocation = () => {
    return (
        <div className={style.progress}>
            <Progress />
        </div>
    );
};

export default ProgressLocation;