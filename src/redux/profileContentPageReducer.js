import {F_ADD, getAva, getText, PROFILE_CONTENT, SET_LOADING_P, SET_PROFILE, SET_TEXT, setText} from "./utils";

let initState = {
    mPosts: [
        {id: 0, text: '123', img: '/predator.jpeg', cnt: 10},
        {id: 1, text: '321', img: '/predator.jpeg', cnt: 2},
        {id: 2, text: '456', img: '/predator.jpeg', cnt: 0},
        {id: 3, text: '654', img: '/predator.jpeg', cnt: -5}
    ],
    id: 2,
    loading: false,
    text: "",
    status: "status",
    lookingForAJob: false,
    lookingForAJobDescription: "Хоче писать react",
    fullName: "Абр`ам",
    contacts: {
        github: "https://githab.com",
        vk: "https://vk.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        website: "https://website.com",
        youtube: "https://youtube.com",
        mainLink: "https://mainLink.com"
    },
    large: "/ava.jpeg"
};

const profileContentPageReducer = (state = initState, action) => {
    let stateCopy = state;

    if(action.type===SET_TEXT
       && action.from === PROFILE_CONTENT) {
        stateCopy = {...state};
        setText(stateCopy, action.text);
    }else if(action.type===F_ADD
            && action.from === PROFILE_CONTENT) {
        stateCopy = {...state};
        fAddPost(stateCopy);
        stateCopy.mPosts = [...stateCopy.mPosts];
    }else if(action.type === SET_PROFILE){
        if(action.id === state.id)
            stateCopy = {
                mPosts                   : state.mPosts,
                text                     : state.text,
                loading                  : false,
                status                   : action.obj.aboutMe,
                id                       : action.obj.userId,
                lookingForAJob           : action.obj.lookingForAJob,
                lookingForAJobDescription: action.obj.lookingForAJobDescription,
                fullName                 : action.obj.fullName,
                contacts                 : action.obj.contacts,
                large: action.obj.photos.large!=null ? action.obj.photos.large: action.obj.photos.small,
            };
    }else if(action.type === SET_LOADING_P)
        stateCopy = {
            mPosts                   : state.mPosts,
            text                     : state.text,
            loading                  : true,
            id                       : action.id,
            contacts                 : {}
        };

    return stateCopy;
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