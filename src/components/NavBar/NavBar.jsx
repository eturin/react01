import React from "react";
import cls from './NavBar.module.css'

const NavBar= ()=> {
    return (
        <div className={cls.NavBar}>
            <div><a href="#1">Профиль</a></div>
            <div><a href="#2">Сообщения</a></div>
            <div><a href="#3">Новости</a></div>
            <div><a href="#4">Музыка</a></div>
            <div><a href="#5">Настройки</a></div>
        </div>);
}

export default NavBar;
