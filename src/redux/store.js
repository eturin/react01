import {combineReducers, createStore} from "redux";
import dialogsPageReducer, {getKeys, getMessage, getPeoples} from "./dialogsPageReducer";
import navBarReducer, {getFriends} from "./navBarReducer";
import profileContentPageReducer, {getPosts} from "./profileContentPageReducer";
import {DIALOGS, f_add, getText, PROFILE_CONTENT, set_text} from "./utils";

let reducers = combineReducers({
    DialogsPage: dialogsPageReducer,
    NavBar: navBarReducer,
    ProfileContentPage: profileContentPageReducer
});

let store = createStore(reducers);
store.getPosts  =getPosts;
store.getText   =getText;
store.getFriends=getFriends;
store.getPeoples=getPeoples;
store.getKeys   =getKeys;
store.getMessage=getMessage;
store.actionCreaters={
    c:{PROFILE_CONTENT:PROFILE_CONTENT, DIALOGS:DIALOGS},
    f:{set_text:set_text,f_add:f_add}
};

export default store;
