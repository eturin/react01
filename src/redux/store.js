import {combineReducers, createStore} from "redux";
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

let store = createStore(reducers);

export default store;
