import React from "react";
import cls from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar= ()=> {
    return (
        <div className={cls.NavBar}>
            <div><NavLink to="/profile" activeClassName={cls.ActiveLink}>Профиль</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={cls.ActiveLink}>Сообщения</NavLink></div>
            <div><NavLink to="/news" activeClassName={cls.ActiveLink}>Новости</NavLink></div>
            <div><NavLink to="/musics" activeClassName={cls.ActiveLink}>Музыка</NavLink></div>
            <div><NavLink to="/settings" activeClassName={cls.ActiveLink}>Настройки</NavLink></div>
        </div>);
}

export default NavBar;
