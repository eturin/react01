import React from "react";
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router"
import css from './Dialogs.module.css'
import ItemDialog from "./Item/Item";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let mPeople = props.dispatch({type:'getPeoples'});
    let mJSXPeople = mPeople.map(x => <ItemDialog name={x.name} id={x.id} img={x.img}/>);
    let mJSXRoute  = mPeople.map(x => <Route path={'/dialogs/'+x.id}
                                             render={()=> <Messages mKey={props.dispatch({type:'getKeys', id:x.id})} id={x.id} dispatch={props.dispatch}/>} />
    );

    return (
            <div className={css.Dialogs}>
                <div className={css.Names}>
                    <span>Беседы</span>
                    { mJSXPeople }
                </div>
                { mJSXRoute }
            </div>
    );
}

export default Dialogs;