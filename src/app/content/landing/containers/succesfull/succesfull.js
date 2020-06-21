import React from 'react';
import style from './succesfull.module.css'
import congratulationsPhoto from '../../../../../assets/congrats.svg'
import { Link } from 'react-router-dom';

const succesfull = ({content}) => {
    return (
        <div className={style.congratulations__container}>
            <img className={style.congratulations__photo} src={congratulationsPhoto}></img>
            <h2 className={style.congratulations__title}>{content}</h2>
            <Link to="/tracker">Go to dashboard</Link>
        </div>
    );
};

export default succesfull;