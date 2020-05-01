import React,{useState} from "react";
import css from './Messages.module.css'
import Message from "../Message/Message";
import NewPost from "../../ProfileContent/Posts/New/NewPost";

const Messages = (props) =>{
    const [v,f] = useState([]);

    let mJSXMessages = props.mKey.map(i => <Message message={props.store.getMessage(props.state,i)} id={i}/>);
    props.dispatch({type:'setId',id:props.id});

    return (
        <div className={css.Messages}>
            <span>Сообщения</span>
            { mJSXMessages }
            <NewPost reloadPosts={{v:v,f:f}} state={props.state} store={props.store} dispatch={props.dispatch} from={props.store.actionCreaters.c.DIALOGS}  />
        </div>
    );
};

export  default Messages;
