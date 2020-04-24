import React from "react";
import cls from './Item.module.css'
import {NavLink} from "react-router-dom";

const Item  = (prop)=>{
    return(
        <div className={cls.Item} >
            <NavLink to={prop.url} activeClassName={cls.ActiveLink}>{prop.name}</NavLink>
        </div>
    );
}

export default Item;