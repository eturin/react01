import React from "react";
import {Route} from "react-router";
import css from './Dialogs.module.css';
import Item from "./Item/Item";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
    let mJSXPeople = props.mPeople.map(x => <Item name={x.name} key={x.id} id={x.id}  img={x.img}/>);
    let mJSXRoute  = props.mPeople.map(x => <Route path={`/dialogs/${x.id}`} key={x.id} render={()=> <MessagesContainer />} /> );

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