import {connect} from "react-redux";
import Auth from "./Auth";
import {logOut} from "../../../redux/authReducer";
import {getMyID, getMyLogin} from "../../UTILS/utils";

/*const mstp = (state)=>{
    return {
        id     : state.Auth.data.id,
        login  : state.Auth.data.login
    };
}*/
const mstp = (state)=>{
    return {
        id     : getMyID(state),
        login  : getMyLogin(state)
    };
}
const AuthContainer = connect(mstp, {logOut})(Auth);
export default AuthContainer;