import {connect} from "react-redux";
import ProfileContent from "./ProfileContent";
import {withRouter} from "react-router";

const mstp = (state, props)=>{
    const id=props.match.params.id;

    return {
        id    : id?id:state.Auth.data.id
    };
}

const ProfileContentContainer = withRouter(connect(mstp,{})(ProfileContent));
export default ProfileContentContainer;