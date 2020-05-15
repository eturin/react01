import React from "react";
import css from './Login.module.css'
import {Redirect} from "react-router";

const Login = (props)=> {
    if(props.isAuth)
        return <Redirect to={`/profile/${props.id}`} />
    return <h1>LOGIN</h1>;

}

export default Login;