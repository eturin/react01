export let state = {
    ProfileContentPage: {
        mPosts: [
            {id: 0, text: '123', img: '/predator.jpeg' , cnt: 10},
            {id: 1, text: '321', img: '/predator.jpeg' , cnt: 2 },
            {id: 2, text: '456', img: '/predator.jpeg' , cnt: 0 },
            {id: 3, text: '654', img: '/predator.jpeg' , cnt: -5}
        ],
        fAddPost: (text,ava)=>{ state.ProfileContentPage.mPosts.push({id: state.ProfileContentPage.mPosts.length, text: text, img: ava, cnt: 0 }); }
    },
    NavBar: {
        FriendsPage: {
            mFriends: [
                {img: "/ava.jpeg" , name: "Дмитрий", id: "d"},
                {img: "/ava2.jpeg", name: "Сергей" , id: "s"},
                {img: "/ava.jpeg" , name: "Валера" , id: "v"}
            ]
        }
    },
    DialogsPage:{
        mPeople:[
            {id:'d',name:"Димыч" ,img:'/ava.jpeg' },
            {id:'a',name:"Андрей",img:'/ava2.jpeg'},
            {id:'s',name:"Света" ,img:'/ava.jpeg' },
            {id:'v',name:"Валера",img:'/ava2.jpeg'}
        ],
        mMessage:[
            {my:false,text:'Hi'          ,img:'/ava.jpeg'     },
            {my:true ,text:'Hello'       ,img:'/predator.jpeg'},
            {my:false,text:'How are you?',img:'/ava.jpeg'     },
            {my:true ,text:'Fine!'       ,img:'/predator.jpeg'}
        ],
        mKey:{
            'd':[0,1,2,3],
            'a':[0,1,2],
            's':[0,1],
            'v':[0]
        }
    }
}
