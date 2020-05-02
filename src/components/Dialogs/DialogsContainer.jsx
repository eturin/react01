import React from "react";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let mPeople = props.store.getPeoples(props.store.getState().DialogsPage);
    return <Dialogs mPeople={ mPeople } store={ props.store }/>
}

export default DialogsContainer;