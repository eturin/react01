import React from 'react';
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router"
import css from './App.module.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Dialogs from "./components/Dialogs/Dialogs";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={css.App}>
                <Header />
                <NavBar store={props.store} state={props.state.NavBar} />
                <div className={css.Content}>
                    <Route path='/profile'  render={() => <ProfileContent store={props.store} state={props.state.ProfileContentPage} dispatch={props.dispatch} /> }/>
                    <Route path='/dialogs'  render={() => <Dialogs        store={props.store} state={props.state.DialogsPage}        dispatch={props.dispatch} /> }/>
                    <Route path='/news'     render={() => <News           store={props.store} /> }/>
                    <Route path='/musics'   render={() => <Musics         store={props.store} /> }/>
                    <Route path='/settings' render={() => <Settings       store={props.store} /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
