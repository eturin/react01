import React from "react";
import css from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar= (props)=> {
    return (
        <div className={css.NavBar}>
            <div className={css.Menu}>
                <div><NavLink to="/profile"  activeClassName={css.ActiveLink}>Профиль</NavLink></div>
                <div><NavLink to="/dialogs"  activeClassName={css.ActiveLink}>Сообщения</NavLink></div>
                <div><NavLink to="/news"     activeClassName={css.ActiveLink}>Новости</NavLink></div>
                <div><NavLink to="/musics"   activeClassName={css.ActiveLink}>Музыка</NavLink></div>
                <br/>
                <div><NavLink to="/settings" activeClassName={css.ActiveLink}>Настройки</NavLink></div>
                <br/>
                <br/>
            </div>
            <Friends state={props.state} store={props.store} dispatch={props.dispatch}/>
        </div>);
}

export default NavBar;
