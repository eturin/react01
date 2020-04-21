import React from 'react';
import cls from './App.module.css'
import HeaderAll from "./components/Header";
import NavBar from "./components/NavBar";
import ProfileContent from "./components/ProfileContent";

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
