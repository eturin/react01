import React from 'react';
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router"
import cls from './App.module.css'
import HeaderAll from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Dialogs from "./components/Dialogs/Dialogs";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={cls.App}>
                <HeaderAll className={cls.HeaderAll}/>
                <NavBar className={cls.NavBar}/>
                <div className={cls.Content}>
                    <Route path='/profile' component={ProfileContent}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/musics' component={Musics}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
