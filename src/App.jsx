import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {Route, withRouter} from "react-router"
import css from './App.module.css'

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUserContainer from "./components/FindUser/FindUserContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContentContainer from "./components/ProfileContent/ProfileContentContainer";
import withLoginRedirect from "./components/HOC/withLoginRedirect";
import {initApp} from "./redux/appReducer";
import Loading from "./components/Loading/Loading";
import {getInitedApp} from "./components/UTILS/utils";


let WithLoginProfileContentContainer = withLoginRedirect(ProfileContentContainer);
let WithLoginDialogsContainer        = withLoginRedirect(DialogsContainer);
let WithLoginSettings                = withLoginRedirect(Settings);

class App extends React.Component {
    componentDidMount() {
        this.props.initApp();
    }
    render(){
        if(!this.props.inited) return <Loading />;

        return (
            <div className={css.App}>
                <Header/>
                <NavBar/>
                <div className={css.Content}>
                    <Route path='/profile/:id?' render={() => <WithLoginProfileContentContainer/>}/>
                    <Route path='/dialogs'      render={() => <WithLoginDialogsContainer/>}/>
                    <Route path='/finduser'     render={() => <FindUserContainer/>}/>
                    <Route path='/news'         render={() => <News/>}/>
                    <Route path='/musics'       render={() => <Musics/>}/>
                    <Route path='/settings'     render={() => <WithLoginSettings/>}/>
                    <Route path='/login'        render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

const mstp = (state) =>{
    return {
        inited: getInitedApp(state)
    };
};

export default compose(
    withRouter,
    connect(mstp, {initApp})
)(App);

