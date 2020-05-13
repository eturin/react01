import {ADD_USERS, FOLLOW, SET_COUNT, SET_PAGE} from "./utils";

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

    if(action.type===FOLLOW){
        stateCopy = {
            ...stateCopy,
            mUsers: stateCopy.mUsers.map(x=> x.id===action.id ? {...x, follow:!action.isFollow} : x )
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
                        page   : action.page,
                        id     : x.id,
                        name   : x.name,
                        img    : x.photos.large,
                        country: null,
                        city   : null,
                        comment: x.status,
                        follow : !x.followed
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