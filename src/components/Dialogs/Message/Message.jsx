import React from "react";
import css from './Message.module.css'


const Message = (props)=>{
    return (
        <div className={props.idDilog=== props.senderId ? css.ItemOver : css.ItemMy} >
            <div className={css.Avatar}><img src={props.idDilog=== props.senderId ? props.img: props.imgMy} /></div>
            <div className={props.idDilog=== props.senderId ? css.TextOther : css.TextMy}>{props.body}</div>
        </div>
    );
}

export  default Message;
