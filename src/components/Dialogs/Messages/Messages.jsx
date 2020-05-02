import React, {useState} from "react";
import css from './Messages.module.css'
import Message from "../Message/Message";
import NewContainer from "../../New/NewContainer";

const Messages = (props) =>{
    const [v,f] = useState([]);

    let mJSXMessages = props.mKey.map(i => <Message message={props.getMessage(i)} id={i}/>);

    return (
        <div className={css.Messages}>
            <span>Сообщения</span>
            { mJSXMessages }
            <NewContainer reloadPosts={ {v:v,f:f} } store={ props.store } from='Dialogs'  />
        </div>
    );
};

export  default Messages;
