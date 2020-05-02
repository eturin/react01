import React from "react";
import Friends from "./Friends";

const FriendsContainer = (props) => {
    let mFriends = props.store.getFriends(props.store.getState().NavBar);
    return <Friends mFriends={mFriends} />
}

export default FriendsContainer;
