import Messages from "./Messages";
import {connect} from "react-redux";
import {getMessages,sendNewMessage} from "../../../redux/dialogsPageReducer";
import {getImg, getImgMy, getLoadingMessages, getSending, getStateMessages, getUserNameForDialog} from "../../UTILS/utils";

const mapStateToProps = (state, ownProps) =>{
    const id = parseInt(window.location.pathname.split('/').slice(-1)[0]);
    return {
        id             : id,
        userName       : getUserNameForDialog(state, id),
        img            : getImg(state, id),
        imgMy          : getImgMy(state),
        loadingMessages: getLoadingMessages(state),
        Messages       : getStateMessages(state,id),
        sending        : getSending(state)
    };
}

const MessagesContainer = connect(mapStateToProps, {getMessages,sendNewMessage})(Messages);
export default MessagesContainer;