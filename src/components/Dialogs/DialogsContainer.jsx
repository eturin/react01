import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {getDialogs, setLoadingDialogs} from "../../redux/dialogsPageReducer";

const mapStateToProps = (state) =>{
    return {
        loading:state.DialogsPage.loading,
        Dialogs:state.DialogsPage.Dialogs.sort((a,b)=> a.lastDialogActivityDate-b.lastDialogActivityDate)
    };
};

const DialogsContainer = connect(mapStateToProps, {getDialogs,setLoadingDialogs})(Dialogs);
export default DialogsContainer;