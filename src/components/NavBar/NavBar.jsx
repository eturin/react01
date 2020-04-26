import React from "react";
import cls from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar= (props)=> {
    return (
        <div className={cls.NavBar}>
            <div className={cls.Menu}>
                <div><NavLink to="/profile"  activeClassName={cls.ActiveLink}>Профиль</NavLink></div>
                <div><NavLink to="/dialogs"  activeClassName={cls.ActiveLink}>Сообщения</NavLink></div>
                <div><NavLink to="/news"     activeClassName={cls.ActiveLink}>Новости</NavLink></div>
                <div><NavLink to="/musics"   activeClassName={cls.ActiveLink}>Музыка</NavLink></div>
                <br/>
                <div><NavLink to="/settings" activeClassName={cls.ActiveLink}>Настройки</NavLink></div>
                <br/>
                <br/>
            </div>
            <Friends state={props.state.FriendsPage}/>
        </div>);
}

export default NavBar;
