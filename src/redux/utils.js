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
export const SET_COUNT      ='SetCount';
export const SET_PROFILE    ='SetProfile';
export const SET_LOADING_P  ='SetLoadingProfile';

export const set_text      = (text, from=PROFILE_CONTENT)  => ({ type: SET_TEXT       , from:from, text:text                            });
export const f_add         = (from=PROFILE_CONTENT)        => ({ type: F_ADD          , from:from                                       });
export const onFollow      = (id)                                => ({ type: FOLLOW         , id:id                                            });
export const addUsers      = (page, mUsers,totalCount)           => ({ type: ADD_USERS      , page:page, mUsers:mUsers, totalCount:totalCount  });
export const setPage       = (Page)                              => ({ type: SET_PAGE       , Page:Page                                        });
export const setCount      = (count)                             => ({ type: SET_COUNT      , count:count                                      });
export const setProfile    = (id,obj)                            => ({ type: SET_PROFILE    , id: id, obj:obj                                  });
export const setLoadinProf = (id)                                => ({ type: SET_LOADING_P  , id: id                                           });

const baseURL='https://social-network.samuraijs.com/api/1.0';
export const GET_users = (count, page, onSucces) => {
    Axios.get(`${baseURL}/users?page=${page}&count=${count}`)
        .then((resp)=>{
            onSucces(page, resp.data.items, resp.data.totalCount);
        })
        .catch(error => {
            try {
                alert("Page (" + page + "): " + error.response.data.message)
            }catch (e) {
                alert("Page (" + page + "): error")
            }
        });
}
export const getProfile = (id,setLoading,onSucces) =>{
    setLoading(id);
    Axios.get(`${baseURL}/profile/${id}`)
        .then((resp)=>{onSucces(id, resp.data);})
        .catch(error => {
            try {
                alert("ERR: get profile (" + id + "): " + error.response.data.message)
            } catch (e) {
                alert("ERR: get profile (" + id + ")!")
            }
        });
}
