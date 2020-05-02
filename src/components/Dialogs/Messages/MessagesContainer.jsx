import React from "react";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let state = props.store.getState().DialogsPage;
    let mKey = props.store.getKeys(state, props.id);
    let getMessage = (i) => props.store.getMessage(state,i);
    props.store.setId(state, props.id);

    return <Messages getMessage={ getMessage } store={ props.store } mKey={ mKey }/>
}

export default MessagesContainer;