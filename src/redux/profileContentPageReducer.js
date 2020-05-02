import {F_ADD, getAva, getText, PROFILE_CONTENT, SET_TEXT, setText} from "./utils";

let initState = {
    ava: '/predator.jpeg',
    mPosts: [
        {id: 0, text: '123', img: '/predator.jpeg', cnt: 10},
        {id: 1, text: '321', img: '/predator.jpeg', cnt: 2},
        {id: 2, text: '456', img: '/predator.jpeg', cnt: 0},
        {id: 3, text: '654', img: '/predator.jpeg', cnt: -5}
    ],
    text: "",
};

const profileContentPageReducer = (state = initState, action) => {
    if(action.type===SET_TEXT
       && action.from === PROFILE_CONTENT)
        setText(state, action.text);
    else if(action.type===F_ADD
            && action.from === PROFILE_CONTENT)
        fAddPost(state);
    return state;
}

export const getPosts = (state) => state.mPosts;
export const fAddPost = (state) => {
    let mPosts=getPosts(state);
    mPosts.push(
        {
            id  : mPosts.length,
            text: getText(state),
            img : getAva(state),
            cnt : 0
        });
    setText(state,'');
};

export default profileContentPageReducer;