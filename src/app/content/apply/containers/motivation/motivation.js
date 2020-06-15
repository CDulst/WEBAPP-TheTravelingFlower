import React from 'react';
import style from './motivation.module.css';
import Field from "../../../../components/field/field";
import Upload from "../../../../components/upload/upload";

function Motivation() {
return(
<>
<div className={style.button__wrapper}>
<Upload text = "upload video"/>
</div>
</>
)
}

export default Motivation;