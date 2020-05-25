import EditLine from "./EditLine";
import {connect} from "react-redux";
import {stopEditLine} from "../../../redux/profileContentPageReducer";
import {getIDforDilog, getMyID, getValueForDilog} from "../../UTILS/utils";

const mstp = (state,props) =>{
    return {
        id       : getIDforDilog(state),
        myId     : getMyID(state),
        text     : getValueForDilog(state,props.source),
        source   : props.source
    }
}

const EditLineContainer = connect(mstp,{stopEditLine})(EditLine);
export default EditLineContainer;