import React, { useState } from 'react';
import style from './switch.module.css'
import Switch from '@material-ui/core/Switch';
import uiStore from '../../content/challenge/stores/uiStore';
import { useObserver } from 'mobx-react-lite';

const SwitchButton = ({item1, item2}) => {

    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    })

    

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.checked})
        if(state.checkedA === false) {
            uiStore.textIn();
        }else {
            uiStore.textOut();
        }
        
    }


    return  (
        <div className={style.switch}>
            <p>{item1}</p>
            <Switch checked={state.checkedA} onChange={handleChange} name="checkedA" inputProps={{'aria-label': 'primary checkbox'}}  />
            <p>{item2}</p>
        </div>
    );
};

export default SwitchButton