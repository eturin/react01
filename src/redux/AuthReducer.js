import {aXiOs} from '../components/UTILS/utils'
import {stopSubmit} from 'redux-form'

export const SET_ME           ='SetMe';
export const SET_LOADING_ME   ='SetLoadingMe';
export const SET_CAPTCHA      ='SetCaptcha';

let initState = {
    loading: false,
    cnt: 0,
    data: {
        id   : undefined,
        email: undefined,
        login: undefined
    },
    captcha: undefined
}

const authReducer = (state = initState, action)=>{
    let copyState = state;

    if(action.type === SET_ME) {
        copyState = {
            ...state,
            data: {...action.data},
            loading: false,
            captcha: undefined
        }
    }else if(action.type === SET_LOADING_ME) {
        copyState = {
            ...initState,
            loading: true,
            cnt: state.cnt + 1
        }
    }else if(action.type === SET_CAPTCHA) {
        copyState = {
            ...state,
            captcha: action.url
        }
    }

    return copyState;
}

export default authReducer;

//action creaters
export const setMe          = (data)                              => ({ type: SET_ME           , data: data                                       })
export const setLoadingMe   = ()                                  => ({ type: SET_LOADING_ME                                                      })
export const setCaptha      = (url)                               => ({ type: SET_CAPTCHA      , url: url                                         })

//thunk creaters
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
export const logIn           = (data) => {
    return (dispatch) => {
        aXiOs.post(`auth/login`,
            {
                email: data.login,
                password: data.pwd,
                rememberMe: data.rememberMe,
                captcha: data.captcha
            })
            .then((resp) => {
                if (resp.data.resultCode === 0) {
                    authMe()(dispatch);
                }else if (resp.data.resultCode === 1) {
                    dispatch(stopSubmit('login', {
                        login: 'error',
                        pwd: 'error',
                        _error: resp.data.messages && resp.data.messages.length > 0 ? resp.data.messages[0] : undefined
                    }));
                }else if(resp.data.resultCode === 10) {
                    const err = resp.data.messages && resp.data.messages.length > 0 ? resp.data.messages[0] : undefined;
                    aXiOs.get(`security/get-captcha-url`)
                        .then(resp => {
                            dispatch(stopSubmit('login', {
                                _error: err
                            }));
                            dispatch(setCaptha(resp.data.url));
                        })
                }else {
                    dispatch(stopSubmit('login', {_error: resp.data.messages && resp.data.messages.length > 0 ? resp.data.messages[0] : undefined}));
                }
            })
            .catch(error => {
                try {
                    alert("ERR: login: " + error.response.data.message[0])
                } catch (e) {
                    alert("ERR: login!")
                }
            })
    }
}
export const logOut          = () =>{
    return (dispatch) => {
        aXiOs.post(`auth/logout`)
            .then((resp) => {
                if (resp.data.resultCode === 0)
                    authMe()(dispatch);
                else
                    alert(resp.data.messages)
            })
            .catch(error => {
                try {
                    alert("ERR: logout: " + error.response.data.message)
                } catch (e) {
                    alert("ERR: logout!")
                }
            })
    }
}