import React from "react";
import css from './Login.module.css'
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";

const LoginForm =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={css.Form}>
                <div className={css.Name}><Field component='input'
                                                 name='login'
                                                 type='text'
                                                 placeholder='Login'
                                                 title='Имя'/></div>
                <div className={css.Pass}><Field component='input'
                                                 name='pwd'
                                                 type='password'
                                                 placeholder='Password'
                                                 title='Пароль'/></div>
                <div className={css.Rem}><Field component='input'
                                                name='remembeMe'
                                                type='checkbox'
                                                title='Запомнить меня'/>Запомнить меня </div>
                <div className={css.But}>
                    <button>Login</button>
                </div>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login' //уникальное имя формы в state
})(LoginForm);

const Login = (props)=> {
    if(props.isAuth)
        return <Redirect to={`/profile/${props.id}`} />
    return (
        <div className={css.Login}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={props.logIn}/>
        </div>
    );
}

export default Login;