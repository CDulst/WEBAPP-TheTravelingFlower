import React from 'react';
import style from './message.module.css'

const message = ({avatar, content, name}) => {
    return (
        <div className={style.message__container}>
            <img className={style.message__image} src={avatar} alt={`pictureAvatar${name}`}></img>
            <div className={style.message__contentName}>
                <p className={style.message__name}>{name}</p>
                <p className={style.message__content}>{content}</p>
            </div>
        </div>
    );
};

export default message;