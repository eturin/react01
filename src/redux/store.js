import {combineReducers, createStore} from "redux";
import dialogsPageReducer        from "./dialogsPageReducer";
import navBarReducer             from "./navBarReducer";
import profileContentPageReducer from "./profileContentPageReducer";
import findUserReducer           from "./findUserReducer";

let reducers = combineReducers({
    DialogsPage       : dialogsPageReducer,
    NavBar            : navBarReducer,
    ProfileContentPage: profileContentPageReducer,
    FindUserPage      : findUserReducer
});

let store = createStore(reducers);

export default store;
