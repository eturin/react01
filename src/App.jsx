import React from 'react';
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router"
import css from './App.module.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUserContainer from "./components/FindUser/FindUserContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileContentContainer from "./components/ProfileContent/ProfileContentContainer";
import withLoginRedirect from "./components/HOC/withLoginRedirect";



const App = (props) => {
    let WithLoginProfileContentContainer=withLoginRedirect(ProfileContentContainer);
    let WithLoginDialogsContainer=withLoginRedirect(DialogsContainer);
    return (
        <div className={css.App}>
            <Header/>
            <NavBar />
            <div className={css.Content}>
                <Route path='/profile/:id?' render={() => <WithLoginProfileContentContainer   /> }/>
                <Route path='/dialogs'      render={() => <WithLoginDialogsContainer          /> }/>
                <Route path='/finduser'     render={() => <FindUserContainer         /> }/>
                <Route path='/news'         render={() => <News                      /> }/>
                <Route path='/musics'       render={() => <Musics                    /> }/>
                <Route path='/settings'     render={() => <Settings                  /> }/>
                <Route path='/login'        render={() => <LoginContainer            /> }/>
            </div>
        </div>
    );
}

export default App;
