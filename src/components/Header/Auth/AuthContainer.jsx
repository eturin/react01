import {connect} from "react-redux";
import Auth from "./Auth";
import {authMe, logOut} from "../../../redux/utils";

const mstp = (state)=>{
    return {
        id     : state.Auth.data.id,
        login  : state.Auth.data.login,
        loading: state.Auth.loading,
        cnt    : state.Auth.cnt
    };
}

const AuthContainer = connect(mstp, {authMe,logOut})(Auth);
export default AuthContainer;