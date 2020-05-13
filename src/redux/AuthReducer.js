import {SET_LOADING_ME, SET_ME} from "./utils";

let initState = {
    loading: false,
    cnt: 0,
    data: {
        id   : undefined,
        email: undefined,
        login: undefined
    }
}

const authReducer = (state = initState, action)=>{
    let copyState = state;

    if(action.type === SET_ME)
        copyState = {
            ...state,
            data: { ...action.data },
            loading: false
        }
    else if(action.type === SET_LOADING_ME)
        copyState = {
            ...initState,
            loading: true,
            cnt: state.cnt+1
        }

    return copyState;
}

export default authReducer;