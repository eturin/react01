import Axios from "axios";

export const getAva  = (state) => state.ava;
export const setText = (state,text) => { state.text = text; };
export const getText = (state)  => state.text;

export const SET_TEXT       ='setText';
export const F_ADD          ='fAdd';
export const PROFILE_CONTENT='ProfileContent';
export const DIALOGS        ='Dialogs';
export const FOLLOW         ='onFollow';
export const IS_WATING_FOLLOW='isWatingFollow';
export const ADD_USERS      ='AddUsers';
export const SET_PAGE       ='SetPage';
export const SET_COUNT      ='SetCount';
export const SET_PROFILE    ='SetProfile';
export const SET_LOADING_P  ='SetLoadingProfile';
export const SET_ME         ='SetMe';
export const SET_LOADING_ME ='SetLoadingMe';

export const set_text      = (text, from=PROFILE_CONTENT)  => ({ type: SET_TEXT        , from:from, text:text                             });
export const f_add         = (from=PROFILE_CONTENT)        => ({ type: F_ADD           , from:from                                        });
export const onFollow      = (id,isFollow)                       => ({ type: FOLLOW          , id:id, isFollow:isFollow                         });
export const isWatingFollow= (id)                                => ({ type: IS_WATING_FOLLOW, id:id                                            });
export const addUsers      = (page, mUsers,totalCount)           => ({ type: ADD_USERS       , page:page, mUsers:mUsers, totalCount:totalCount  });
export const setPage       = (Page)                              => ({ type: SET_PAGE        , Page:Page                                        });
export const setCount      = (count)                             => ({ type: SET_COUNT       , count:count                                      });
export const setProfile    = (id,obj)                            => ({ type: SET_PROFILE     , id: id, obj:obj                                  });
export const setLoadinProf = (id)                                => ({ type: SET_LOADING_P   , id: id                                           });
export const setMe         = (data)                              => ({ type: SET_ME          , data: data                                       })
export const setLoadingMe  = ()                                  => ({ type: SET_LOADING_ME                                                     })


const aXiOs = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{'API-KEY':'cb5f1a59-7c67-4a7f-8191-768910f74f3f'}
});

export const GET_users = (count, page, onSucces) => {
    aXiOs.get(`users?page=${page}&count=${count}`)
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
    aXiOs.get(`profile/${id}`)
        .then((resp)=>{onSucces(id, resp.data);})
        .catch(error => {
            try {
                alert("ERR: get profile (" + id + "): " + error.response.data.message)
            } catch (e) {
                alert("ERR: get profile (" + id + ")!")
            }
        });
}
export const authMe = (setLoading,onSucces) =>{
    setLoading();
    aXiOs.get(`auth/me`)
        .then((resp) => {
            if(resp.data.resultCode===0)
                onSucces(resp.data.data);
        })
        .catch(error => {
            try {
                alert("ERR: auth me: " + error.response.data.message)
            } catch (e) {
                alert("ERR: auth me!")
            }
        })
}
export const Follow_UnFollow = (isFollow, id, onSucces) =>{
    if(isFollow)
        aXiOs.post(`follow/${id}`, {})
             .then(resp => {
                if(resp.data.resultCode===0)
                    onSucces(isFollow, id);
                else
                    alert(resp.data.messages)
             })
             .catch(error => {
                 debugger;
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
                    onSucces(isFollow, id);
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
