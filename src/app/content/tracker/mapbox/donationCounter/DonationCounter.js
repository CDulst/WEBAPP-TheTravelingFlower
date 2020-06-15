import React from 'react';
import style from './DonationCounter.module.css'
import { Link } from 'react-router-dom';
import ROUTES from "../../../../../routes/index";



const DonationCounter = () => {
    return (
        <div className={style.donationCounter__container}>
            <p><span>123.32</span><span>raised!</span></p>
            <div className={style.treesSaved}>
                <p>40trees saved!</p>
                <Link to = {ROUTES.challenge}>Go to challenge</Link>
            </div>
        </div>
    );
};

export default DonationCounter;