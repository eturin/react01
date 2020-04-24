import React from "react";
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router"
import cls from './Dialogs.module.css'
import ItemDialog from "./Item/Item";
import Item from "../ProfileContent/Posts/Items/Item/Item";


const Dialogs = (props) => {
    return (
        <BrowserRouter>
            <div className={cls.Dialogs}>
                <div className={cls.Names}>
                    <span>Беседы</span>
                    <ItemDialog name="Димыч" url='/dialogs/d'/>
                    <ItemDialog name="Андрей" url='/dialogs/a'/>
                    <ItemDialog name="Света" url='/dialogs/s'/>
                    <ItemDialog name="Валера" url='/dialogs/v'/>
                </div>

                <Route path='/dialogs/d'>
                    <div className={cls.Messages}>
                        <span>Сообщения</span>
                        <Item text='Hi' img='/ava.jpeg' cnt='10'/>
                        <Item text='Hello' img='/ava2.jpeg' cnt='2'/>
                        <Item text='How are you?' img='/ava.jpeg' cnt='0'/>
                        <Item text='Fine!' img='/ava2.jpeg' cnt='-5'/>
                    </div>
                </Route>
                <Route path='/dialogs/a'>
                    <div className={cls.Messages}>
                        <span>Сообщения</span>
                        <Item text='Hi' img='/ava.jpeg' cnt='10'/>
                        <Item text='Hello' img='/ava2.jpeg' cnt='2'/>
                        <Item text='How are you?' img='/ava.jpeg' cnt='0'/>
                    </div>
                </Route>
                <Route path='/dialogs/s'>
                    <div className={cls.Messages}>
                        <span>Сообщения</span>
                        <Item text='Hi' img='/ava.jpeg' cnt='10'/>
                        <Item text='Hello' img='/ava2.jpeg' cnt='2'/>
                    </div>
                </Route>
                <Route path='/dialogs/v'>
                    <div className={cls.Messages}>
                        <span>Сообщения</span>
                        <Item text='Hi' img='/ava.jpeg' cnt='10'/>
                    </div>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default Dialogs;