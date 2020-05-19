import EditLine from "./EditLine";
import {connect} from "react-redux";
import {stopEditLine} from "../../../redux/profileContentPageReducer";

const mstp = (state,props) =>{
    return {
        id       : state.ProfileContentPage.id,
        myId     : state.Auth.data.id,
        text     : state.ProfileContentPage[props.source],
        source   : props.source
    }
}

const EditLineContainer = connect(mstp,{stopEditLine})(EditLine);
export default EditLineContainer;