import React from "react";
import cls from './Messages.module.css'
import Message from "../Message/Message";

const Messages = (props) =>{
    const mMessage=[
        {text:'Hi'          ,img:'/ava.jpeg' ,cnt:10},
        {text:'Hello'       ,img:'/ava2.jpeg',cnt:2 },
        {text:'How are you?',img:'/ava.jpeg' ,cnt:0 },
        {text:'Fine!'       ,img:'/ava2.jpeg',cnt:-5}
    ];
    const map = {
        'd':[0,1,2,3],
        'a':[0,1,2],
        's':[0,1],
        'v':[0]
    };

    let mJSXMessages=map[props.location.pathname.split('/')
        .pop()].map(i => <Message text={mMessage[i].text} img={mMessage[i].img} cnt={mMessage[i].cnt} id={i}/>);

    return (
        <div className={cls.Messages}>
            <span>Сообщения</span>
            { mJSXMessages }
        </div>
    );
};

export  default Messages;
