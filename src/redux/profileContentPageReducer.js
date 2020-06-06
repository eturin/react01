import {aXiOs} from "../components/UTILS/utils";
import {dispatch} from "../storeOld";
import {stopSubmit} from "redux-form";

export const SET_PROFILE      ='SetProfile';
export const SET_STATUS       ='SetStatus';
export const SET_LOADING_P    ='SetLoadingProfile';
export const SET_SENDING      ='SetSendingProfile';

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
    img: "/ava.jpeg"
};

const profileContentPageReducer = (state = initState, action) => {
    let stateCopy = state;

    if(action.type === SET_PROFILE){
        if(action.id === state.id)
            stateCopy = {
                ...state,
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
                large                    : action.obj.photos.large!=null ? action.obj.photos.large: action.obj.photos.small
            };
    }else if(action.type === SET_STATUS){
        if(action.id === state.id)
            stateCopy = {
                ...state,
                status: action.status
            };
    }else if(action.type === SET_SENDING) {
        stateCopy = {
            ...state,
            isSending: !state.isSending
        }
    }else if(action.type === SET_LOADING_P)
        stateCopy = {
            ...state,
            mPosts                   : state.mPosts,
            text                     : state.text,
            loading                  : true,
            id                       : action.id,
            contacts                 : {}
        };

    return stateCopy;
}

/*export const getPosts = (state) => state.mPosts;
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
};*/

export default profileContentPageReducer;

//action creaters
export const setProfile     = (id,obj)                            => ({ type: SET_PROFILE      , id: id, obj:obj                                  });
export const setStatus      = (id,status)                         => ({ type: SET_STATUS       , id: id, status:status                            });
export const setLoadingProf = (id)                                => ({ type: SET_LOADING_P    , id: id                                           });
export const setSending     = ()                                  => ({ type: SET_SENDING                                                         })

//thunk creaters
export const getProfile      = (id) => {
    id=parseInt(id);
    return (dispatch) => {
        dispatch(setLoadingProf(id));
        return aXiOs.get(`profile/${id}`)
                    .then((resp) => {
                        dispatch(setProfile(id, resp.data));
                        aXiOs.get(`profile/status/${id}`)
                            .then((resp) => {
                                dispatch(setStatus(id, resp.data))
                            })
                            .catch(error => {
                                try {
                                    alert("ERR: get status (" + id + "): " + error.response.data.message)
                                } catch (e) {
                                    alert("ERR: get status (" + id + ")!")
                                }
                            });
                    })
                    .catch(error => {
                        try {
                            alert("ERR: get profile (" + id + "): " + error.response.data.message)
                        } catch (e) {
                            alert("ERR: get profile (" + id + ")!")
                        }
                    });

    }
}
export const stopEditLine    = (id,source,text) =>{
    return (dispatch) => {
        if(source==='status') {
            aXiOs.put(`/profile/status`, {status: text})
                .then((resp) => {
                    if (resp.data.resultCode === 0) {
                        getProfile(id)(dispatch);
                    }
                })
                .catch(error => {
                    try {
                        alert("ERR: update status: " + error.response.data.message)
                    } catch (e) {
                        alert("ERR: update status!")
                    }
                })
        }
    }
}

export const sendProf = (form) =>{
    return (dispatch) => {
        dispatch(setSending());
        aXiOs.put(`/profile`, {
            userId                   : form.userId,
            lookingForAJob           : form.LookingForAJob,
            lookingForAJobDescription: form.LookingForAJobDescription,
            fullName                 : form.FullName,
            AboutMe                  : form.AboutMe,
            contacts: {
                github   : form.Github,
                vk       : form.Vk,
                facebook : form.Facebook,
                instagram: form.Instagram,
                twitter  : form.Twitter,
                website  : form.Website,
                youtube  : form.Youtube
            }
            })
            .then((resp)=>{
                if(resp.data.resultCode===0)
                    getProfile(form.userId)(dispatch);
                else {
                    let inf={};
                    for(let err of resp.data.messages){
                        let tmp=err.match(/^(.+)\(.*?(\w+)\)$/);
                        if(tmp !== null)
                            inf[tmp[2]] = tmp[1];
                        else
                            inf['_error'] = err;
                    }
                    dispatch(stopSubmit('editProf', inf));
                }
                dispatch(setSending());
            })
            .catch(error => {
                try {
                    alert("ERR: update profile: " + error.response.data.message)
                } catch (e) {
                    alert("ERR: update profile!")
                }
                dispatch(setSending());
            })
    }
}