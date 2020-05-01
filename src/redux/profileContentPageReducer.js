let initState = {
    ava: '/predator.jpeg',
    mPosts: [
        {id: 0, text: '123', img: '/predator.jpeg', cnt: 10},
        {id: 1, text: '321', img: '/predator.jpeg', cnt: 2},
        {id: 2, text: '456', img: '/predator.jpeg', cnt: 0},
        {id: 3, text: '654', img: '/predator.jpeg', cnt: -5}
    ],
    textOfNewPost: "",
};

const profileContentPageReducer = (state = initState, action) => {

    return state;
}

export default profileContentPageReducer;