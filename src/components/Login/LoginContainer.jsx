import Login from "./Login";
import {connect} from "react-redux";
import {logIn} from "../../redux/utils";

const mstp=(state) =>{
    return {
        isAuth: state.Auth.data.id !== undefined,
        id    : state.Auth.data.id
    }
}

const LoginContainer = connect(mstp,{logIn})(Login)
export default LoginContainer;