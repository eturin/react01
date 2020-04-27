import React from "react";
import css from './Item.module.css'

const Item = (props)=>{
    return (
        <div className={css.Item} id={props.id}>
            <div className={css.Avatar}><img src={props.img} /></div>
            <div className={css.Text}>{props.text}</div>
            <div className={css.Control}><span>like</span> <span className={css.LikeCnt}>{props.cnt}</span></div>
        </div>
    );
}

export  default Item;
