export let state = {
    ProfileContentPage: {
        ava: '/predator.jpeg',
        mPosts: [
            {id: 0, text: '123', img: '/predator.jpeg' , cnt: 10},
            {id: 1, text: '321', img: '/predator.jpeg' , cnt: 2 },
            {id: 2, text: '456', img: '/predator.jpeg' , cnt: 0 },
            {id: 3, text: '654', img: '/predator.jpeg' , cnt: -5}
        ],
        newPost: {
            textOfNewPost: "",
            setText: (text) => { state.ProfileContentPage.newPost.textOfNewPost=text; }
        },
        fAddPost: ()=>{
            state.ProfileContentPage.mPosts.push({id  : state.ProfileContentPage.mPosts.length,
                                                  text: state.ProfileContentPage.newPost.textOfNewPost,
                                                  img : state.ProfileContentPage.ava,
                                                  cnt: 0 });
            state.ProfileContentPage.newPost.textOfNewPost="";
        }
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
            {id:0,my:false,text:'Hi'          ,img:'/ava.jpeg'     },
            {id:1,my:true ,text:'Hello'       ,img:'/predator.jpeg'},
            {id:2,my:false,text:'How are you?',img:'/ava.jpeg'     },
            {id:3,my:true ,text:'Fine!'       ,img:'/predator.jpeg'}
        ],
        mKey:{
            'd':[0,1,2,3],
            'a':[0,1,2],
            's':[0,1],
            'v':[0]
        },
        newPost: {
            textOfNewPost: "",
            setText: (text) => { state.DialogsPage.newPost.textOfNewPost=text; },
            id:undefined,
            setId: (id) => {state.DialogsPage.newPost.id=id;}
        },
        fAddMessage: ()=>{
            state.DialogsPage.mMessage.push({id: state.DialogsPage.mMessage.length,
                                             my: true,
                                             text: state.DialogsPage.newPost.textOfNewPost,
                                             img: state.ProfileContentPage.ava});
            state.DialogsPage.mKey[state.DialogsPage.newPost.id].push(state.DialogsPage.mMessage.length-1);
            state.DialogsPage.newPost.textOfNewPost="";
        }
    }
}
