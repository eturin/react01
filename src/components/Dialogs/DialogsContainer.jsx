import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    let mPeople = state.DialogsPage.mPeople;
    return {
        mPeople:mPeople
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;