import React from "react";
import css from './Message.module.css'


const Message = (props)=>{
    return (
        <div className={props.message.my!=true ? css.ItemOver : css.ItemMy} id={props.message.id}>
            <div className={css.Avatar}><img src={props.message.img} /></div>
            <div className={props.message.my!=true ? css.TextOther : css.TextMy}>{props.message.text}</div>
        </div>
    );
}

export  default Message;
