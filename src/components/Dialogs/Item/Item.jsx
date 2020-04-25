import React from "react";
import cls from './Item.module.css'
import {NavLink} from "react-router-dom";

const Item  = (props)=>{
    return(
        <div className={cls.Item} >
            <img className={cls.Img} src={props.img} />
            <NavLink className={cls.A} to={'/dialogs/'+props.id+'?id='+props.id} activeClassName={cls.ActiveLink}>{props.name}</NavLink>
        </div>
    );
}

export default Item;