
import React from 'react'
import {Line} from 'rc-progress';
import style from "./progressbar.module.css"



const progressbar = () => {
    

    return (
        <div>
            <Line percent="20" strokeWidth="0.7" strokeColor="#0a824b" trailColor="#0a2f2f"/>
        </div>
    );
};

export default progressbar;