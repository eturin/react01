let state = {
    ProfileContentPage: {
        ava: '/predator.jpeg',
        mPosts: [
            {id: 0, text: '123', img: '/predator.jpeg', cnt: 10},
            {id: 1, text: '321', img: '/predator.jpeg', cnt: 2},
            {id: 2, text: '456', img: '/predator.jpeg', cnt: 0},
            {id: 3, text: '654', img: '/predator.jpeg', cnt: -5}
        ],
        textOfNewPost: "",
    },
    NavBar: {
        FriendsPage: {
            mFriends: [
                {img: "/ava.jpeg", name: "Дмитрий", id: "d"},
                {img: "/ava2.jpeg", name: "Сергей", id: "s"},
                {img: "/ava.jpeg", name: "Валера", id: "v"}
            ]
        }
    },
    DialogsPage: {
        mPeople: [
            {id: 'd', name: "Димыч", img: '/ava.jpeg'},
            {id: 'a', name: "Андрей", img: '/ava2.jpeg'},
            {id: 's', name: "Света", img: '/ava.jpeg'},
            {id: 'v', name: "Валера", img: '/ava2.jpeg'}
        ],
        mMessage: [
            {id: 0, my: false, text: 'Hi', img: '/ava.jpeg'},
            {id: 1, my: true, text: 'Hello', img: '/predator.jpeg'},
            {id: 2, my: false, text: 'How are you?', img: '/ava.jpeg'},
            {id: 3, my: true, text: 'Fine!', img: '/predator.jpeg'}
        ],
        mKey: {
            'd': [0, 1, 2, 3],
            'a': [0, 1, 2],
            's': [0, 1],
            'v': [0]
        },
        textOfNewPost: "",
        id: undefined
    }
}

export let store =
    {
        getState: () =>{
            return state;
        },
        getAva: () =>{
            return store.getState().ProfileContentPage.ava;
        },
        setPostText: (text) => {
            store.getState().ProfileContentPage.textOfNewPost = text;
        },
        getPostText: () =>{
            return store.getState().ProfileContentPage.textOfNewPost;
        },
        fAddPost: () => {
            let mPosts=store.getPosts();
            mPosts.push(
                {
                    id  : mPosts.length,
                    text: store.getPostText(),
                    img : store.getAva(),
                    cnt : 0
            });
            store.setPostText('');
        },
        setMessageText: (text) => {
            store.getState().DialogsPage.textOfNewPost = text;
        },
        getMessageText: (text) => {
            return store.getState().DialogsPage.textOfNewPost;
        },
        setId: (id) => {
            store.getState().DialogsPage.id = id;
        },
        getId: (id) => {
            return store.getState().DialogsPage.id;
        },
        fAddMessage: () => {
            let mMessages=store.getMessages();
            mMessages.push(
                {
                    id  : mMessages.length,
                    my  : true,
                    text: store.getMessageText(),
                    img : store.getAva()
            });
            store.getState().DialogsPage.mKey[store.getId()].push(mMessages.length - 1);
            store.setMessageText('');
        },
        getFriends: () => {
            return store.getState().NavBar.FriendsPage.mFriends;
        },
        getPosts: () => {
            return store.getState().ProfileContentPage.mPosts;
        },
        getPeoples: () => {
            return store.getState().DialogsPage.mPeople;
        },
        getKeys: (id) =>{
            return store.getState().DialogsPage.mKey[id];
        },
        getMessage: (id) =>{
            return store.getState().DialogsPage.mMessage[id];
        },
        getMessages: () =>{
            return store.getState().DialogsPage.mMessage;
        }
};


