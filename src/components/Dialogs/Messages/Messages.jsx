import React,{useState} from "react";
import css from './Messages.module.css'
import Message from "../Message/Message";
import NewPost from "../../ProfileContent/Posts/New/NewPost";

const Messages = (props) =>{
    const [v,f] = useState([]);

    let mJSXMessages = props.mKey.map(i => <Message message={props.store.getMessage(i)} id={i}/>);
    props.store.setId(props.id);

    return (
        <div className={css.Messages}>
            <span>Сообщения</span>
            { mJSXMessages }
            <NewPost reloadPosts={{v:v,f:f}} fAdd={props.store.fAddMessage} getText={props.store.getMessageText} setText={props.store.setMessageText} />
        </div>
    );
};

export  default Messages;
