import {
    CANCEL_EDIT_LINE,
    F_ADD,
    getAva,
    getText,
    PROFILE_CONTENT, SENDING_EDIT_LINE,
    SET_LOADING_P,
    SET_PROFILE,
    SET_STATUS,
    SET_TEXT,
    setText,
    START_EDIT_LINE, STOP_EDIT_LINE,
    UPDATE_EDIT_LINE
} from "./utils";

let initState = {
    mPosts: [
        {id: 0, text: '123', img: '/predator.jpeg', cnt: 10},
        {id: 1, text: '321', img: '/predator.jpeg', cnt: 2},
        {id: 2, text: '456', img: '/predator.jpeg', cnt: 0},
        {id: 3, text: '654', img: '/predator.jpeg', cnt: -5}
    ],
    id: undefined,
    loading: false,
    text: "",
    status: "status",
    isSending: false,
    editText:'',
    editValue:undefined,
    aboutme: "",
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

    if(action.type===START_EDIT_LINE) {
        if(state.id===action.id) {
            stateCopy = {
                ...state,
                editValue: action.source,
                editText: state[action.source]
            };
        }
    }else if(action.type===UPDATE_EDIT_LINE) {
        if(state.id===action.id) {
            stateCopy = {
                ...state,
                editText: action.val
            };
        }
    }else if(action.type===CANCEL_EDIT_LINE) {
        if(action.source===state.editValue)
            stateCopy = {
                ...state,
                editValue: undefined,
                editText: '',
                isSending: false
            };
    }else if(action.type===SENDING_EDIT_LINE) {
        if (state.id===action.id && action.source === state.editValue) {
            stateCopy = {
                ...state,
                isSending: true
            };
            state[action.source] = 'sending...';
        }
    }else if(action.type===SET_TEXT
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
                aboutme                  : action.obj.aboutMe,
                status                   : "",
                id                       : action.obj.userId,
                lookingForAJob           : action.obj.lookingForAJob,
                lookingForAJobDescription: action.obj.lookingForAJobDescription,
                fullName                 : action.obj.fullName,
                contacts                 : action.obj.contacts,
                large: action.obj.photos.large!=null ? action.obj.photos.large: action.obj.photos.small
            };
    }else if(action.type === SET_STATUS){
        if(action.id === state.id)
            stateCopy = {
                ...state,
                status: action.status
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