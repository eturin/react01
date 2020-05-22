import Login from "./Login";
import {connect} from "react-redux";
import {logIn} from "../../redux/AuthReducer";
import {withRouter} from "react-router";

const mstp=(state, props) =>{
    return {
        isAuth : state.Auth.data.id !== undefined,
        id     : state.Auth.data.id,
        captcha: state.Auth.captcha
    }
}

const LoginContainer = withRouter(connect(mstp,{logIn})(Login))
export default LoginContainer;