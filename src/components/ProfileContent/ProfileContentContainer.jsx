import {connect} from "react-redux";
import ProfileContent from "./ProfileContent";

const mstp = (state)=>{
    const id=window.location.pathname.split('/').slice(-1)[0];

    return {
        id    : id?id:state.Auth.data.id
    };
}

const ProfileContentContainer = connect(mstp,{})(ProfileContent)
export default ProfileContentContainer;