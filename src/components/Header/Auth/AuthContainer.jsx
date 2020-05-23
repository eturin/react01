import {connect} from "react-redux";
import Auth from "./Auth";
import {logOut} from "../../../redux/authReducer";

const mstp = (state)=>{
    return {
        id     : state.Auth.data.id,
        login  : state.Auth.data.login
    };
}

const AuthContainer = connect(mstp, {logOut})(Auth);
export default AuthContainer;