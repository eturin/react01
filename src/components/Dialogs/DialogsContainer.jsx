import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
        mPeople:state.DialogsPage.mPeople
    };
};

const DialogsContainer = connect(mapStateToProps, {})(Dialogs);
export default DialogsContainer;