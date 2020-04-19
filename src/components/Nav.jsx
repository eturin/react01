import React from "react";
import './Nav.css'

const Nav= ()=> {
    return (
        <div className='Nav-wrapper'>
            <div><a href="#1">Профиль</a></div>
            <div><a href="#2">Сообщения</a></div>
            <div><a href="#3">Новости</a></div>
            <div><a href="#4">Музыка</a></div>
            <div><a href="#5">Настройки</a></div>
        </div>);
}

export default Nav;
