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

const store = {
        _state: state,
        _getAva() {  return this._state.ProfileContentPage.ava; },
        _setPostText(text) { this._state.ProfileContentPage.textOfNewPost = text; },
        _getPostText()  { return this._state.ProfileContentPage.textOfNewPost; },
        _fAddPost() {
            let mPosts=this._getPosts();
            mPosts.push(
                {
                    id  : mPosts.length,
                    text: this._getPostText(),
                    img : this._getAva(),
                    cnt : 0
            });
            this._setPostText('');
        },
        _setMessageText(text) { this._state.DialogsPage.textOfNewPost = text;},
        _getMessageText(text) { return this._state.DialogsPage.textOfNewPost; },
        _setId(id) { this._state.DialogsPage.id = id; },
        _getId() { return this._state.DialogsPage.id; },
        _fAddMessage()  {
            let mMessages=this._getMessages();
            mMessages.push(
                {
                    id  : mMessages.length,
                    my  : true,
                    text: this._getMessageText(),
                    img : this._getAva()
            });
            this._state.DialogsPage.mKey[this._getId()].push(mMessages.length - 1);
            this._setMessageText('');
        },
        _getFriends() { return this._state.NavBar.FriendsPage.mFriends; },
        _getPosts() { return this._state.ProfileContentPage.mPosts; },
        _getPeoples() { return this._state.DialogsPage.mPeople; },
        _getKeys(id) { return this._state.DialogsPage.mKey[id]; },
        _getMessage(id) { return this._state.DialogsPage.mMessage[id]; },
        _getMessages() { return this._state.DialogsPage.mMessage; },

        dispatch(action){
            if(action.type==='getAva')
                return this._getAva();
            else if(action.type==='setText') {
                if (action.from === 'Dialogs')
                    this._setMessageText(action.text);
                else
                    this._setPostText(action.text);
            }else if(action.type==='getText') {
                if (action.from === 'Dialogs')
                    return this._getMessageText(action.text);
                else
                    return this._getPostText();
            }else if(action.type==='fAdd') {
                if (action.from === 'Dialogs')
                    this._fAddMessage();
                else
                    this._fAddPost();
            }else if(action.type==='setId')
                this._setId(action.id);
            else if(action.type==='getId')
                return this._getId();
            else if(action.type==='getFriends')
                return this._getFriends();
            else if(action.type==='getPosts')
                return this._getPosts();
            else if(action.type==='getPeoples')
                return this._getPeoples();
            else if(action.type==='getKeys')
                return this._getKeys(action.id);
            else if(action.type==='getMessage')
                return this._getMessage(action.id);
            else if(action.type==='getMessages')
                return this._getMessages();

            return undefined;
        }
};

export const dispatch = store.dispatch.bind(store);




