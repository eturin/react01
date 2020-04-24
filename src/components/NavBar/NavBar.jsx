import React from "react";
import cls from './NavBar.module.css'

const NavBar= ()=> {
    return (
        <div className={cls.NavBar}>
            <div><a href="/profile">Профиль</a></div>
            <div><a href="/dialogs">Сообщения</a></div>
            <div><a href="/news">Новости</a></div>
            <div><a href="/musics">Музыка</a></div>
            <div><a href="/settings">Настройки</a></div>
        </div>);
}

export default NavBar;
