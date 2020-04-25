import React from "react";
import cls from './Message.module.css'

const Message = (props)=>{
    return (
        <div className={cls.Item} id={props.id}>
            <div className={cls.Avatar}><img src={props.img} /></div>
            <div className={cls.Text}>{props.text}</div>
            <div className={cls.Control}><span>like</span> <span className={cls.LikeCnt}>{props.cnt}</span></div>
        </div>
    );
}

export  default Message;
