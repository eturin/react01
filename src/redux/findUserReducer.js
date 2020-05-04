import {ADD_USERS, FOLLOW} from "./utils";

let initState ={
    mUsers:[
        {id:0,name:"Димыч",img:"/ava.jpeg" ,country:"Беларусия",city:"Минск"   ,comment:"Красава",follow:false},
        {id:1,name:"Сашок",img:"/ava2.jpeg",country:"USA"      ,city:"New-York",comment:"kika"   ,follow:true },
        {id:2,name:"Стас" ,img:"/ava.jpeg" ,country:"Россия"   ,city:"Москва"  ,comment:"Круть"  ,follow:true }
    ]
}

const findUserReducer = (state = initState, action) =>{
    let stateCopy = state;

    if(action.type===FOLLOW){
        stateCopy = {
            ...state
        };
        stateCopy.mUsers[action.id] = {
            ...stateCopy.mUsers[action.id],
            follow:!stateCopy.mUsers[action.id].follow
        };
    }else if (action.type === ADD_USERS){
        stateCopy = {
            ...state,
            mUsers: [...stateCopy.mUsers, ...action.mUsers]
        };
    }

    return stateCopy;
}

export default findUserReducer;