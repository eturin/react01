import React from 'react';
import './App.css'
import Header from "./components/Header";
import Nav from "./components/Nav";
import ProfileContent from "./components/ProfileContent";

const  App = () => {
  return (
      <div className='app-wraper'>
          <Header/>
          <Nav/>
          <ProfileContent/>
      </div>
  );
}

export default App;
