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
                <NavBar dispatch={props.dispatch}/>
                <div className={css.Content}>
                    <Route path='/profile'  render={() => <ProfileContent dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs'  render={() => <Dialogs dispatch={props.dispatch}/>}/>
                    <Route path='/news'     render={News}/>
                    <Route path='/musics'   render={Musics}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
