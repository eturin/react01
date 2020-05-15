import Login from "./Login";
import {connect} from "react-redux";

const mstp=(state) =>{
    return {
        isAuth: state.Auth.data.id !== undefined,
        id    : state.Auth.data.id
    }
}

const LoginContainer = connect(mstp,{})(Login)
export default LoginContainer;