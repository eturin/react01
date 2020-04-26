import React from "react";
import cls from './Messages.module.css'
import Message from "../Message/Message";
import NewPost from "../../ProfileContent/Posts/New/NewPost";

const Messages = (props) =>{
    let mJSXMessages=[];
    if(props.mKey!=undefined)
        mJSXMessages=props.mKey.map(i => <Message text={props.state.mMessage[i].text} img={props.state.mMessage[i].img} my={props.state.mMessage[i].my} id={i}/>);

    return (
        <div className={cls.Messages}>
            <span>Сообщения</span>
            { mJSXMessages }
            <NewPost/>
        </div>
    );
};

export  default Messages;
