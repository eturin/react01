import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addToDilogs, getDialogs, setLoadingDialogs} from "../../redux/dialogsPageReducer";
import {getLoadingDialogs, getStateDialogs} from "../UTILS/utils";

const mapStateToProps = (state) =>{
    let id = window.location.pathname.split('/').slice(-1)[0];
    return {
        id     : id!=='dialogs' ? parseInt(id): undefined,
        loading: getLoadingDialogs(state),
        Dialogs: getStateDialogs(state)
    };
};

const DialogsContainer = connect(mapStateToProps, {getDialogs,setLoadingDialogs,addToDilogs})(Dialogs);
export default DialogsContainer;