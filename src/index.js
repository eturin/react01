import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const mPosts=[
    {id:0,text:'123',img:'ava.jpeg' ,cnt:10},
    {id:1,text:'321',img:'ava2.jpeg',cnt:2 },
    {id:2,text:'456',img:'ava.jpeg' ,cnt:0 },
    {id:3,text:'654',img:'ava2.jpeg',cnt:-5}
];

ReactDOM.render(
  <React.StrictMode>
    <App mPosts={mPosts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
