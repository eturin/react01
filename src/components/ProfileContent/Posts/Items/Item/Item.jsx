import React from "react";
import cls from './Item.module.css'

const Item = (props)=>{
    return (
        <div className={cls.Item}>
            <dev className={cls.Avatar}><img src={props.img} /></dev>
            <div className={cls.Text}>{props.text}</div>
            <div className={cls.Control}><span>like</span> <span className={cls.LikeCnt}>{props.cnt}</span></div>
        </div>
    );
}

export  default Item;
