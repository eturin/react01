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

const App = (props) => {
    return (
        <div className={css.App}>
            <Header/>
            <NavBar store={props.store} />
            <div className={css.Content}>
                <Route path='/profile'  render={() => <ProfileContent   store={props.store}/> }/>
                <Route path='/dialogs'  render={() => <DialogsContainer store={props.store}/> }/>
                <Route path='/news'     render={() => <News             store={props.store}/> }/>
                <Route path='/musics'   render={() => <Musics           store={props.store}/> }/>
                <Route path='/settings' render={() => <Settings         store={props.store}/> }/>
            </div>
        </div>
    );
}

export default App;
