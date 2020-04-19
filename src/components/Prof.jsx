import React from "react";
import './Prof.css'

const Prof = ()=>{
    return (
        <div className='prof-wrapper'>
            <div className='prof-avatar'><img src='predator.jpeg'/></div>
            <div className='prof-name'><b>Жентяй</b></div>
            <div className='prof-birthday'><b>Дата рождения:</b> 1976.01.12</div>
            <div className='prof-city'><b>Город:</b> Мозькоу</div>
            <div className='prof-edu'><b>Образование:</b> Диванчик</div>
            <div className='prof-site'><b>Сайт:</b> Этот</div>
        </div>
    );
}

export default Prof;