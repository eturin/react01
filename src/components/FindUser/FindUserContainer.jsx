import React from "react";
import {connect} from "react-redux";
import FindUser from "./FindUser";
import {addUsers} from "../../redux/utils";

const mapStateToProps   = (state) =>{
    let mUsers = state.FindUserPage.mUsers;
    return {
        mUsers: mUsers
    }
}
const mapDispatchToProps= (dispatch) =>{
    const getMore = () => {
        //let action = addUsers();
        //dispatch(action)
    };

    return {
        getMore: getMore
    };
}

const FindUserContainer = connect(mapStateToProps,mapDispatchToProps)(FindUser);

export default FindUserContainer;