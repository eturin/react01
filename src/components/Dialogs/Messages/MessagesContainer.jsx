import Messages from "./Messages";
import {connect} from "react-redux";
import {getMessages,sendNewMessage} from "../../../redux/dialogsPageReducer";
import {getImg, getImgMy, getLoadingMessages, getSending, getStateMessages} from "../../UTILS/utils";

/*const mapStateToProps = (state, ownProps) =>{
    const id = parseInt(window.location.pathname.split('/').slice(-1)[0]);
    return {
        id             : id,
        img            : state.DialogsPage.Dialogs.find(x=>x.id===id).img,
        imgMy          : state.ProfileContentPage.img,
        loadingMessages: state.DialogsPage.loadingMessages,
        Messages       : state.DialogsPage.Messages.sort((a,b)=> a.addedAt-b.addedAt),
        sending        : state.DialogsPage.sending
    };
}*/
const mapStateToProps = (state, ownProps) =>{
    const id = parseInt(window.location.pathname.split('/').slice(-1)[0]);
    return {
        id             : id,
        img            : getImg(state, id),
        imgMy          : getImgMy(state),
        loadingMessages: getLoadingMessages(state),
        Messages       : getStateMessages(state),
        sending        : getSending(state)
    };
}

const MessagesContainer = connect(mapStateToProps, {getMessages,sendNewMessage})(Messages);
export default MessagesContainer;