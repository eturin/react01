import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import navBarReducer from "./navBarReducer";
import profileContentPageReducer from "./profileContentPageReducer";

let reducers = combineReducers({
    DialogsPage: dialogsPageReducer,
    NavBar: navBarReducer,
    ProfileContentPage: profileContentPageReducer
});

let store = createStore(reducers);

export default store;
