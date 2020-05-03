import React from "react";
import {F_ADD, getAva, getText, DIALOGS        , SET_TEXT, setText} from "./utils";

let initState =  {
    mPeople: [
        {id: 'd', name: "Димыч", img: '/ava.jpeg'},
        {id: 'a', name: "Андрей", img: '/ava2.jpeg'},
        {id: 's', name: "Света", img: '/ava.jpeg'},
        {id: 'v', name: "Валера", img: '/ava2.jpeg'}
    ],
    mMessage: [
        {id: 0, my: false, text: 'Hi', img: '/ava.jpeg'},
        {id: 1, my: true, text: 'Hello', img: '/predator.jpeg'},
        {id: 2, my: false, text: 'How are you?', img: '/ava.jpeg'},
        {id: 3, my: true, text: 'Fine!', img: '/predator.jpeg'}
    ],
    mKey: {
        'd': [0, 1, 2, 3],
        'a': [0, 1, 2],
        's': [0, 1],
        'v': [0]
    },
    text: "",
    ava: '/predator.jpeg',
    id: undefined
};

const dialogsPageReducer = (state = initState, action) =>{
    if(action.type === SET_TEXT
       && action.from === DIALOGS)
        setText(state, action.text);
    else if(action.type === F_ADD
            && action.from === DIALOGS)
        fAddMessage(state);

    return state;
}

export const getPeoples = (state) => state.mPeople;
export const getKeys    = (state, id) => state.mKey[id];
export const getMessage = (state, id) => state.mMessage[id];
export const getMessages= (state) => state.mMessage;
export const setId      = (state,id) => { state.id = id; };
export const getId      = (state) => state.id;
export const fAddMessage = (state) => {
    let mMessages=getMessages(state);
    let id = window.location.pathname.split('/').slice(-1);
    mMessages.push(
        {
            id  : mMessages.length,
            my  : true,
            text: getText(state),
            img : getAva(state)
        });
    state.mKey[id].push(mMessages.length - 1);
    setText(state,'');
};

export default dialogsPageReducer;