import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    let id=window.location.pathname.split('/').slice(-1);

    let mMessages = [];
    for(let i of state.DialogsPage.mKey[id])
        mMessages.push(state.DialogsPage.mMessage[i]);

    return {
        dialog_id: id,
        mMessages: mMessages
    };
}
const mapDispatchToProps = (dispatch) => {
    return {};
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;