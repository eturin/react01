import React from "react";
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router"
import cls from './Dialogs.module.css'
import ItemDialog from "./Item/Item";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    const mPeople=[
        {id:'d',name:"Димыч" ,img:'/ava.jpeg' },
        {id:'a',name:"Андрей",img:'/ava2.jpeg'},
        {id:'s',name:"Света" ,img:'/ava.jpeg' },
        {id:'v',name:"Валера",img:'/ava2.jpeg'}
    ];
    let mJSXPeople = mPeople.map(x => (<ItemDialog name={x.name} id={x.id} img={x.img}/>));
    let mJSXRoute  = mPeople.map(x => (<Route path={'/dialogs/'+x.id} component={Messages}/>));

    return (
        <BrowserRouter>
            <div className={cls.Dialogs}>
                <div className={cls.Names}>
                    <span>Беседы</span>
                    { mJSXPeople }
                </div>
                { mJSXRoute }
            </div>
        </BrowserRouter>
    );
}

export default Dialogs;