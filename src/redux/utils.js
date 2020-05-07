import Axios from "axios";

export const getAva  = (state) => state.ava;
export const setText = (state,text) => { state.text = text; };
export const getText = (state)  => state.text;

export const SET_TEXT       ='setText';
export const F_ADD          ='fAdd';
export const PROFILE_CONTENT='ProfileContent';
export const DIALOGS        ='Dialogs';
export const FOLLOW         ='Follow';
export const ADD_USERS      ='AddUsers';
export const SET_PAGE       ='SetPage';


export const set_text      = (text, from=PROFILE_CONTENT)  => ({ type: SET_TEXT       , from:from, text:text                            });
export const f_add         = (from=PROFILE_CONTENT)        => ({ type: F_ADD          , from:from                                       });
export const onFollow      = (id)                                => ({ type: FOLLOW         , id:id                                            });
export const addUsers      = (page, mUsers,totalCount)           => ({ type: ADD_USERS      , page:page, mUsers:mUsers, totalCount:totalCount  });
export const setPage       = (Page)                              => ({ type: SET_PAGE       , Page:Page                                        });


const baseURL='https://social-network.samuraijs.com/api/1.0';
export const GET_users = (count, page, onSucces) => {
    Axios.get(`${baseURL}/users?page=${page}&count=${count}`)
        .then((resp)=>{
            onSucces(page, resp.data.items, resp.data.totalCount);
        })
        .catch(error => {
            alert("Page ("+page+"): "+error.response.data.message)
        });
} 
