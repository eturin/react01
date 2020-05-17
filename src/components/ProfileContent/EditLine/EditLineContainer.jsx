import EditLine from "./EditLine";
import {connect} from "react-redux";
import {cancelEditLine, startEditLine, stopEditLine, updateEditLine} from "../../../redux/utils";

const mstp = (state,props) =>{
    return {
        id       : state.ProfileContentPage.id,
        editText : state.ProfileContentPage.editText,
        text     : state.ProfileContentPage[props.source],
        source   : props.source,
        isEdit   : state.ProfileContentPage.editValue===props.source
    }
}

const EditLineContainer = connect(mstp,{startEditLine,updateEditLine,cancelEditLine,stopEditLine})(EditLine);
export default EditLineContainer;