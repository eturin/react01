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

export const store = {
        _state: state,
        getState() { return this._state; },
        getAva() {  return this._state.ProfileContentPage.ava; },
        setPostText(text) { state.ProfileContentPage.textOfNewPost = text; },
        getPostText()  { return state.ProfileContentPage.textOfNewPost; },
        fAddPost() {
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
        setMessageText(text) { state.DialogsPage.textOfNewPost = text;},
        getMessageText(text) { return state.DialogsPage.textOfNewPost; },
        setId(id) { this._state.DialogsPage.id = id; },
        getId(id) { return this._state.DialogsPage.id; },
        fAddMessage()  {
            let mMessages=store.getMessages();
            mMessages.push(
                {
                    id  : mMessages.length,
                    my  : true,
                    text: store.getMessageText(),
                    img : store.getAva()
            });
            state.DialogsPage.mKey[store.getId()].push(mMessages.length - 1);
            store.setMessageText('');
        },
        getFriends() { return this._state.NavBar.FriendsPage.mFriends; },
        getPosts() { return state.ProfileContentPage.mPosts; },
        getPeoples() { return this._state.DialogsPage.mPeople; },
        getKeys(id) { return this._state.DialogsPage.mKey[id]; },
        getMessage(id) { return this._state.DialogsPage.mMessage[id]; },
        getMessages() { return this._state.DialogsPage.mMessage; }
};

window.store=store;




