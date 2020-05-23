import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {setUrl} from "../../redux/appReducer";

const mstp = (state)=>({isAuth: state.Auth.data.id!==undefined})

const withLoginRedirect = (Component) => {
    class WithRedirect extends React.Component {
        render() {
            if (this.props.isAuth)
                return <Component {...this.props}/>
            else {
                this.props.setUrl(window.location.pathname);
                return <Redirect to='/login' />
            }
        }
    }

    return connect(mstp,{setUrl})(WithRedirect);
}

export default withLoginRedirect;