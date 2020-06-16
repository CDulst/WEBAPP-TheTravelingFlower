import React from 'react';
import style from './DonationCounter.module.css'
import { Link } from 'react-router-dom';
import ROUTES from "../../../../../routes/index";



const DonationCounter = () => {
    return (
        <div className={style.donationCounter__container}>
            <p className={style.donation__paragraph}><span className={style.donation}>$123.32</span><span className={style.raised}>raised!</span></p>
            <div className={style.treesSaved}>
                <p className={style.trees}>40 trees saved!</p>
                <Link className={style.challengeLink} to = {ROUTES.challenge}>Challenge</Link>
            </div>
        </div>
    );
};

export default DonationCounter;