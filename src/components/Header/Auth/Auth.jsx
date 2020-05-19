import React from "react";
import css from './Auth.module.css'
import {NavLink} from "react-router-dom";


class Auth extends React.Component{
    componentDidMount() {
        if(this.props.login === undefined
           && !this.props.loading
           && this.props.cnt===0)
            this.props.authMe();
    }

    render() {
        let mJSX=[];

        if(this.props.login === undefined)
            mJSX.push(<NavLink key={0} className={ css.Link } to='/login'>Login</NavLink>);
        else {
            mJSX.push(<>
                        <NavLink key={this.props.id} className={css.Link}
                               to={`/profile/${this.props.id}`}>{this.props.login}</NavLink>
                        <span key={1} onClick={this.props.logOut}> Выйти</span>
                      </>
                );
        }

        return (
            <div className={ css.Auth }>
                { mJSX }
            </div>
        );
    }
}

export default Auth;
