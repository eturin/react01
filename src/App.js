import React from 'react';
import cls from './App.module.css'
import HeaderAll from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProfileContent from "./components/ProfileContent/ProfileContent";

const  App = () => {
  return (
      <div className={cls.App}>
          <HeaderAll className={cls.HeaderAll}/>
          <NavBar className={cls.NavBar}/>
          <ProfileContent className={cls.ProfileContent}/>
      </div>
  );
}

export default App;
