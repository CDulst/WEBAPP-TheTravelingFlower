import React, { useEffect } from 'react';
import style from './Livechat.module.css';
import Message from '../../../../components/message/message'
import Field from '../../../../components/field/field'
import message from '../../../../../assets/icons/message.svg'
import IconCross from '../../../../../assets/icons/cross.svg';
import {rootStore} from "../../../../../stores/index";
import { useObserver } from 'mobx-react-lite';
import uiTracker from "../../stores/uiStore";
import {v4} from "uuid";
const Livechat = () => {
    
    useEffect(() => {

      });

    const handleEnter = (e) => {
        if (e.key === "Enter"){
          if (e.currentTarget.value !== ""){
            const message = {
              id: v4(),
              content: e.currentTarget.value,
              userEmail: rootStore.uiStore.currentUser.email
          }
          rootStore.messageStore.createMessage(message);
          e.currentTarget.value = "";
          }
          }
    }

    const handleOnClick = (e) => {
        uiTracker.UIIn();

      }

    return useObserver(() => (
        <>
        <div className={( uiTracker.uiOut ? `${style.livechat__container} ${style.chatIn}` : `${style.livechat__container} ${style.chatOut}` )}>
        <img onClick = {e => handleOnClick()} className={style.livechat__close} src={IconCross} alt="cross"></img>
            <div className={style.messages}>
           
      {

           rootStore.messageStore.messages.map(message => (
            <Message avatar = {rootStore.userStore.findUserByEmail(message.userEmail).avatar} content = {message.content}  name={rootStore.userStore.filterUsersByEmail(message.userEmail).name} />
           ))
        
      }
        </div>
        <div className={style.input__wrapper}>
        <Field icon={message} value="type a message" width="50%" border="1px" onEnter={handleEnter}/>
        </div>
    </div>
    </>
    ));
};

export default Livechat;