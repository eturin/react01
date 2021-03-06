import React from "react";
import css from './Item.module.css'
import {NavLink} from "react-router-dom";

const Item  = (props)=>{
    return(
        <div className={css.Item} >
            <img className={css.Img} src={props.img} alt={props.img} />
            <NavLink className={css.A} to={ `/dialogs/${props.id}` } activeClassName={css.ActiveLink}>{props.userName} {props.newMessagesCount>0? `[${props.newMessagesCount}]`:''}</NavLink>
        </div>
    );
}

export default Item;