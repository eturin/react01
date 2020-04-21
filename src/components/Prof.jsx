import React from "react";
import cls from './Prof.module.css';
//console.log(cls);

const Prof = ()=>{
    return (
        <div className={cls.Prof}>
            <div className={cls.Avatar}><img src='predator.jpeg'/></div>
            <div className={cls.Name}><b>Жентяй</b></div>
            <div className={cls.Birthday}><b>Дата рождения:</b> 1976.01.12</div>
            <div className={cls.City}><b>Город:</b> Мозькоу</div>
            <div className={cls.Edu}><b>Образование:</b> Диванчик</div>
            <div className={cls.Site}><b>Сайт:</b> Этот</div>
        </div>
    );
}

export default Prof;