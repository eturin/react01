import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";

/*const MessagesContainer_ = (props) => {
    let state = props.store.getState().DialogsPage;
    let mKey = props.store.getKeys(state, props.id);
    let getMessage = (i) => props.store.getMessage(state,i);
    props.store.setId(state, props.id);

    return <Messages getMessage={ getMessage } store={ props.store } mKey={ mKey }/>
}*/

const mapStateToProps = (state) =>{
    let id=window.location.pathname.split('/').slice(-1);

    let mMessages = [];
    for(let i of state.DialogsPage.mKey[id])
        mMessages.push(state.DialogsPage.mMessage[i]);

    return {
        dialog_id: id,
        mMessages:mMessages
    };
}
const mapDispatchToProps = (dispatch) => {
    return {};
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;