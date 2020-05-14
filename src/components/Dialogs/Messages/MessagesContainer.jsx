import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) =>{
    const id = window.location.pathname.split('/').slice(-1)[0];
    return {
        dialog_id: id,
        mMessages: state.DialogsPage.mKey[id].map(i => state.DialogsPage.mMessage[i])
    };
}

const MessagesContainer = connect(mapStateToProps, {})(Messages);
export default MessagesContainer;