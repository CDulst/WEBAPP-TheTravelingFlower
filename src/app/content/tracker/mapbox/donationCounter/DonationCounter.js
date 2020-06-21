import React from 'react';
import style from './DonationCounter.module.css'
import { Link } from 'react-router-dom';
import ROUTES from "../../../../../routes/index";
import {rootStore} from "../../../../../stores/index"
import { useObserver } from 'mobx-react-lite';

const DonationCounter = () => {
    return useObserver(() =>(
        <div className={style.donationCounter__container}>
            <p className={style.donation__paragraph}><span className={style.donation}>{(rootStore.serverValuesStore.serverValues.length > 0 ? rootStore.serverValuesStore.serverValues[rootStore.serverValuesStore.serverValues.length - 1].donation.toFixed(2) : <></>)}</span><span className={style.raised}>raised!</span></p>
            <div className={style.treesSaved}>
                <p className={style.trees}>Good Job!</p>
                <Link className={style.challengeLink} to = {ROUTES.challenge}>Challenge</Link>
            </div>
        </div>
    ));
};

export default DonationCounter;