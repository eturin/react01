import {authMe} from "./authReducer";

const INITED_APP = 'app/InitedAPP';
const SET_URL    = 'app/SetUrl';

let initState = {
    isInitApp: false,
    url_to_go_back_after_redirect: '/'
}

const appReducer = (state = initState, action) =>{
    let copyState = state;
    switch(action.type){
        case INITED_APP:
            copyState = {
                ...state,
                isInitApp: true
            }
            break;
        case SET_URL:
            copyState = {
                ...state,
                url_to_go_back_after_redirect: action.url
            }
            break;
        default:
            break;
    }

    return copyState;
}
//action creaters
export const inited = () => ({type: INITED_APP});
export const setUrl = (url)=> ({type: SET_URL, url:url});

//thunk creaters
export const initApp = ()=>{
    return (dispath)=>{
        Promise.all([authMe()(dispath)])
                .then(()=>{
                    dispath(inited());
                });
    }
}
export default appReducer;