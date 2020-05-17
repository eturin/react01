import Axios from "axios";

export const getAva  = (state) => state.ava;
export const setText = (state,text) => { state.text = text; };
export const getText = (state)  => state.text;

export const SET_TEXT         ='setText';
export const F_ADD            ='fAdd';
export const PROFILE_CONTENT  ='ProfileContent';
export const DIALOGS          ='Dialogs';
export const FOLLOW           ='onFollow';
export const IS_WATING_FOLLOW ='isWatingFollow';
export const ADD_USERS        ='AddUsers';
export const SET_PAGE         ='SetPage';
export const SET_COUNT        ='SetCount';
export const SET_PROFILE      ='SetProfile';
export const SET_STATUS       ='SetStatus';
export const START_EDIT_LINE  ='StartEditLine';
export const SENDING_EDIT_LINE='SendingEditLine';
export const UPDATE_EDIT_LINE ='UpdEditLine';
export const CANCEL_EDIT_LINE ='CancelEditLine';
export const SET_LOADING_P    ='SetLoadingProfile';
export const SET_ME           ='SetMe';
export const SET_LOADING_ME   ='SetLoadingMe';

//action creaters
export const set_text       = (text, from=PROFILE_CONTENT)  => ({ type: SET_TEXT         , from:from, text:text                             });
export const f_add          = (from=PROFILE_CONTENT)        => ({ type: F_ADD            , from:from                                        });
export const onFollow       = (id,isFollow)                       => ({ type: FOLLOW           , id:id, isFollow:isFollow                         });
export const isWatingFollow = (id)                                => ({ type: IS_WATING_FOLLOW , id:id                                            });
export const addUsers       = (page, mUsers,totalCount)           => ({ type: ADD_USERS        , page:page, mUsers:mUsers, totalCount:totalCount  });
export const setPage        = (Page)                              => ({ type: SET_PAGE         , Page:Page                                        });
export const setCount       = (count)                             => ({ type: SET_COUNT        , count:count                                      });
export const setProfile     = (id,obj)                            => ({ type: SET_PROFILE      , id: id, obj:obj                                  });
export const setStatus      = (id,status)                         => ({ type: SET_STATUS       , id: id, status:status                            });
export const startEditLine  = (id,source)                         => ({ type: START_EDIT_LINE  , id: id, source: source                           });
export const updateEditLine = (id,val)                            => ({ type: UPDATE_EDIT_LINE , id: id, val: val                                 });
export const cancelEditLine = (source)                            => ({ type: CANCEL_EDIT_LINE , source: source                                   });
export const sendingEditLine= (id,source)                         => ({ type: SENDING_EDIT_LINE, id: id,source: source                            });
export const setLoadinProf  = (id)                                => ({ type: SET_LOADING_P    , id: id                                           });
export const setMe          = (data)                              => ({ type: SET_ME           , data: data                                       })
export const setLoadingMe   = ()                                  => ({ type: SET_LOADING_ME                                                      })

const aXiOs = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{'API-KEY':'cb5f1a59-7c67-4a7f-8191-768910f74f3f'}
});

//thunk creaters
export const Follow_UnFollow = (isFollow,id) => {
    return (dispatch) => {
        dispatch(isWatingFollow(id));
        if(isFollow)
            aXiOs.post(`follow/${id}`, {})
                .then(resp => {
                    if(resp.data.resultCode===0)
                        dispatch(onFollow(id,isFollow));
                    else
                        alert(resp.data.messages)
                })
                .catch(error => {
                    try {
                        alert("ERR: follow: " + error.response.data.message)
                    } catch (e) {
                        alert("ERR: follow!")
                    }
                });
        else
            aXiOs.delete(`follow/${id}`)
                .then(resp => {
                    if(resp.data.resultCode===0)
                        dispatch(onFollow(id,isFollow));
                    else
                        alert(resp.data.messages)
                })
                .catch(error => {
                    try {
                        alert("ERR: follow: " + error.response.data.message)
                    } catch (e) {
                        alert("ERR: follow!")
                    }
                });
    }
}
export const getMore         = (count,page) => {
    return (dispatch) => {
        aXiOs.get(`users?page=${page}&count=${count}`)
            .then((resp)=>{
                dispatch(addUsers(page, resp.data.items, resp.data.totalCount));
            })
            .catch(error => {
                try {
                    alert("Page (" + page + "): " + error.response.data.message)
                }catch (e) {
                    alert("Page (" + page + "): error")
                }
            });
    }
}
export const authMe          = () => {
    return (dispatch) => {
        dispatch(setLoadingMe());
        aXiOs.get(`auth/me`)
            .then((resp) => {
                if (resp.data.resultCode === 0)
                    dispatch(setMe(resp.data.data));
            })
            .catch(error => {
                try {
                    alert("ERR: auth me: " + error.response.data.message)
                } catch (e) {
                    alert("ERR: auth me!")
                }
            })
    }
}
export const getProfile      = (id) => {
    id=parseInt(id);
    return (dispatch) => {
        dispatch(setLoadinProf(id));
        aXiOs.get(`profile/${id}`)
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
            dispatch(sendingEditLine(id,source));
            aXiOs.put(`/profile/status`, {status: text})
                .then((resp) => {
                    if (resp.data.resultCode === 0) {
                        dispatch(cancelEditLine(source));
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