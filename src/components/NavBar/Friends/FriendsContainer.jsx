import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    let mFriends = state.NavBar.FriendsPage.mFriends;
    return {mFriends:mFriends};
}
const mapDispatchToProps = (dispatch) =>{
    return {};
}
const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends);

export default FriendsContainer;
