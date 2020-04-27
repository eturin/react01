import React from "react";
import css from './Prof.module.css';
//console.log(cls);

const Prof = ()=>{
    return (
        <div className={css.Prof}>
            <div className={css.Avatar}><img src='predator.jpeg'/></div>
            <div className={css.Name}><b>Жентяй</b></div>
            <div className={css.Birthday}><b>Дата рождения:</b> 1976.01.12</div>
            <div className={css.City}><b>Город:</b> Мозькоу</div>
            <div className={css.Edu}><b>Образование:</b> Диванчик</div>
            <div className={css.Site}><b>Сайт:</b> Этот</div>
        </div>
    );
}

export default Prof;