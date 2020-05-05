import React from "react";
import css from './Item.module.css'

const Item = (props) => {
    return (
        <div className={css.Item}>
            <div className={css.AvaButton}>
                <img className={css.Img} src={props.img== null ? '/empty.jpeg' : props.img}/>
                <button className={!props.follow ? css.ButtonActive : css.ButtonInActive}
                        title={props.follow ? 'Подписаться' : 'Отписаться'}
                        onClick={ () => props.onFollow(props.id) }>{props.follow ? 'Подписаться' : 'Отписаться'}</button>
            </div>
            <div className={css.Block}>
                <p className={css.Name}>{props.name}</p>
                <p className={css.Country}>{props.country}</p>
                <p className={css.City}>{props.city}</p>
                <p className={css.Comment}>{props.comment}</p>
            </div>
        </div>
    );
}

export default Item;