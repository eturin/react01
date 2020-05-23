import Login from "./Login";
import {connect} from "react-redux";
import {logIn} from "../../redux/authReducer";
import {withRouter} from "react-router";

const mstp=(state, props) =>{
    return {
        isAuth : state.Auth.data.id !== undefined,
        id     : state.Auth.data.id,
        captcha: state.Auth.captcha,
        url    : state.App.url_to_go_back_after_redirect
    }
}

const LoginContainer = withRouter(connect(mstp,{logIn})(Login))
export default LoginContainer;