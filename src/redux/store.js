import {applyMiddleware, combineReducers, createStore} from "redux";
import ThunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

import dialogsPageReducer        from "./dialogsPageReducer";
import navBarReducer             from "./navBarReducer";
import profileContentPageReducer from "./profileContentPageReducer";
import findUserReducer           from "./findUserReducer";
import authReducer               from "./authReducer";
import appReducer                from "./appReducer";


let reducers = combineReducers({
    App               : appReducer,
    Auth              : authReducer,
    DialogsPage       : dialogsPageReducer,
    NavBar            : navBarReducer,
    ProfileContentPage: profileContentPageReducer,
    FindUserPage      : findUserReducer,
    form              : formReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
