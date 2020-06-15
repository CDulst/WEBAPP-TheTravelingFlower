import React from 'react';
import style from './message.module.css'

const message = ({avatar, content, name}) => {
    return (
        <div className="message__container">
            <img></img>
            <div>
                <p></p>
                <p></p>
            </div>
        </div>
    );
};

export default message;