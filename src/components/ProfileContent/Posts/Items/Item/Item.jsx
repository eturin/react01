import React from "react";
import cls from './Item.module.css'

const Item = ()=>{
    return (
        <div className={cls.Item}>
            <dev className={cls.Avatar}><img src="ava.jpeg" /></dev>
            <div className={cls.Text}>Отдельный пост</div>
            <div className={cls.Control}><span>like</span></div>
        </div>
    );
}

export  default Item;
