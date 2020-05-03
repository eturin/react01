import React, {useState} from "react";
import css from './Messages.module.css'
import Message from "../Message/Message";
import NewContainer from "../../New/NewContainer";

const Messages = (props) =>{
    let mJSXMessages = props.mMessages.map(x => <Message key={ x.id } id={ x.id } my={ x.my } text={ x.text } img={ x.img } />);

    return (
        <div className={css.Messages}>
            <span>Сообщения</span>
            { mJSXMessages }
            <NewContainer />
        </div>
    );
};

export  default Messages;
