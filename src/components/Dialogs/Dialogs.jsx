import React from "react";
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router"
import cls from './Dialogs.module.css'
import ItemDialog from "./Item/Item";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let mJSXPeople = props.state.mPeople.map(x => <ItemDialog name={x.name} id={x.id} img={x.img}/>);
    let mJSXRoute  = props.state.mPeople.map(x => <Route path={'/dialogs/'+x.id}
                                                         render={()=> <Messages mKey={props.state.mKey[x.id]} state={props.state}/>}
                                                  />
    );

    return (
            <div className={cls.Dialogs}>
                <div className={cls.Names}>
                    <span>Беседы</span>
                    { mJSXPeople }
                </div>
                { mJSXRoute }
            </div>
    );
}

export default Dialogs;