import {connect} from "react-redux";
import EditProf from "./EditProf";
import {getMyID, getProf} from "../../UTILS/utils";
import {getProfile, sendProf} from "../../../redux/profileContentPageReducer";
import {formValueSelector} from "redux-form";

const mstp = (state)=>{
    const selector = formValueSelector('editProf');
    return {
        id                 : getMyID(state),
        prof               : getProf(state),
        form_lookingForAJob:selector(state,'LookingForAJob')
    };
}
const EditProfContainer = connect(mstp,{getProfile,sendProf})(EditProf);
export default EditProfContainer;