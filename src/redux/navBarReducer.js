let initState = {
    FriendsPage: {
        mFriends: [
            {img: "/ava.jpeg", name: "Дмитрий", id: "d"},
            {img: "/ava2.jpeg", name: "Сергей", id: "s"},
            {img: "/ava.jpeg", name: "Валера", id: "v"}
        ]
    }
};

const navBarReducer = (state=initState, action) => {

    return state;
}

export  default navBarReducer;