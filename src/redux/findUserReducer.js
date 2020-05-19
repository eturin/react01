import {aXiOs} from "./utils";

export const ADD_USERS        ='AddUsers';
export const SET_PAGE         ='SetPage';
export const SET_COUNT        ='SetCount';
export const FOLLOW           ='onFollow';
export const IS_WATING_FOLLOW ='isWatingFollow';

let initState ={
    count  : 3,
    Page: 1,
    totalPage: 0,
    mUsers :[
        /*{id:0,name:"Димыч",img:"/ava.jpeg" ,country:"Беларусия",city:"Минск"   ,comment:"Красава",follow:false},
        {id:1,name:"Сашок",img:"/ava2.jpeg",country:"USA"      ,city:"New-York",comment:"kika"   ,follow:true },
        {id:2,name:"Стас" ,img:"/ava.jpeg" ,country:"Россия"   ,city:"Москва"  ,comment:"Круть"  ,follow:true }*/
    ]
}

const findUserReducer = (state = initState, action) =>{
    let stateCopy = state;

    if(action.type===IS_WATING_FOLLOW) {
        stateCopy = {
            ...stateCopy,
            mUsers: stateCopy.mUsers.map(x => x.id === action.id ? {...x, isWaiting: true} : x)
        };
    }else if(action.type===FOLLOW){
        stateCopy = {
            ...stateCopy,
            mUsers: stateCopy.mUsers.map(x=> x.id===action.id ? {...x, follow:!action.isFollow, isWaiting: false} : x )
        };
    }else if (action.type===SET_PAGE) {
        stateCopy = {
            ...stateCopy,
            mUsers   : [],
            Page     : action.Page
        };
    }else if(action.type === SET_COUNT){
        stateCopy = {
            ...stateCopy,
            mUsers   : [],
            count    : action.count,
            Page     : 1,
            totalPage: 0
        };
    }else if (action.type === ADD_USERS){
        let mUsers = action.mUsers.map(x => (
                    {
                        page     : action.page,
                        id       : x.id,
                        name     : x.name,
                        img      : x.photos.large,
                        country  : null,
                        city     : null,
                        comment  : x.status,
                        follow   : !x.followed,
                        isWaiting:false
                    })
        );
        stateCopy = {
            ...stateCopy,
            mUsers   : [...mUsers],
            totalPage: Math.ceil(action.totalCount/stateCopy.count)
        };
    }

    return stateCopy;
}

export default findUserReducer;

//action creaters
export const onFollow       = (id,isFollow)                       => ({ type: FOLLOW           , id:id, isFollow:isFollow                         });
export const isWatingFollow = (id)                                => ({ type: IS_WATING_FOLLOW , id:id                                            });
export const addUsers       = (page, mUsers,totalCount)           => ({ type: ADD_USERS        , page:page, mUsers:mUsers, totalCount:totalCount  });
export const setPage        = (Page)                              => ({ type: SET_PAGE         , Page:Page                                        });
export const setCount       = (count)                             => ({ type: SET_COUNT        , count:count                                      });

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
