import {ADD_USERS, FOLLOW} from "./utils";

let initState ={
    page: 1,
    mUsers:[
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
            mUsers: stateCopy.mUsers.map(x=> x.id===action.id ? {...x,follow:!x.follow} : x )
        };
    }else if (action.type === ADD_USERS){
        let mUsers = action.mUsers.map(x => (
                    {
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
            page  : stateCopy.page+1,
            mUsers: [...stateCopy.mUsers, ...mUsers]
        };
    }

    return stateCopy;
}

export default findUserReducer;