import {applyMiddleware, combineReducers, createStore} from "redux";
import ThunkMiddleware from "redux-thunk";
import dialogsPageReducer        from "./dialogsPageReducer";
import navBarReducer             from "./navBarReducer";
import profileContentPageReducer from "./profileContentPageReducer";
import findUserReducer           from "./findUserReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
    Auth              : authReducer,
    DialogsPage       : dialogsPageReducer,
    NavBar            : navBarReducer,
    ProfileContentPage: profileContentPageReducer,
    FindUserPage      : findUserReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
