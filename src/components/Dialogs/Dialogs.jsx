import React from "react";
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router"
import css from './Dialogs.module.css'
import ItemDialog from "./Item/Item";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
    let mJSXPeople = props.mPeople.map(x => <ItemDialog name={x.name} id={x.id} img={x.img}/>);
    let mJSXRoute  = props.mPeople.map(x => <Route path={'/dialogs/'+x.id}
                                                   render={()=> <MessagesContainer id={x.id} store={props.store} />} />
    );

    return (
            <div className={ css.Dialogs }>
                <div className={ css.Names }>
                    <span>Беседы</span>
                    { mJSXPeople }
                </div>
                { mJSXRoute }
            </div>
    );
}

export default Dialogs;