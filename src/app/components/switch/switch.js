import React, { useState } from 'react';
import style from './switch.module.css'
import Switch from '@material-ui/core/Switch';

const SwitchButton = ({item1, item2, handleChange}) => {

    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    })

    handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.checked})
    }

    return (
        <div className={style.switch}>
            <p>{item1}</p>
            <Switch checked={state.checkedA} onChange={handleChange} name="checkedA" inputProps={{'aria-label': 'primary checkbox'}}  />
            <p>{item2}</p>
        </div>
    );
};

export default SwitchButton