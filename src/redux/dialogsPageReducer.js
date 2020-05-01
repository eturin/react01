let initState =  {
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
};

const dialogsPageReducer = (state = initState, action) =>{

    return state;
}

export default dialogsPageReducer;