import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";

const mstp = (state)=>({isAuth: state.Auth.data.id!==undefined})

const withLoginRedirect = (Component) => {
    class WithRedirect extends React.Component {
        render() {
            if (this.props.isAuth)
                return <Component {...this.props}/>
            else
                return <Redirect to='/login' />
        }
    }

    return connect(mstp)(WithRedirect);
}

export default withLoginRedirect;