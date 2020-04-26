import React from "react";
import css from './Message.module.css'


const Message = (props)=>{
    return (
        <div className={props.my!=true ? css.ItemOver : css.ItemMy} id={props.id}>
            <div className={css.Avatar}><img src={props.img} /></div>
            <div className={props.my!=true ? css.TextOther : css.TextMy}>{props.text}</div>
        </div>
    );
}

export  default Message;
