import React from "react";
import css from './Item.module.css'
import {NavLink} from "react-router-dom";

const Item  = (props)=>{
    return(
        <div className={css.Item} >
            <img className={css.Img} src={props.img} />
            <NavLink className={css.A} to={'/dialogs/'+props.id+'?id='+props.id} activeClassName={css.ActiveLink}>{props.name}</NavLink>
        </div>
    );
}

export default Item;