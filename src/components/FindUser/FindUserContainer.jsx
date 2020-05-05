import React from "react";
import Axios from "axios";
import {connect} from "react-redux";
import FindUser from "./FindUser";
import {addUsers, GET_users} from "../../redux/utils";


const mapStateToProps   = (state) =>{
    let mUsers = state.FindUserPage.mUsers;
    const page = state.FindUserPage.page;
    return {
        page  : page,
        mUsers: mUsers
    }
}
const mapDispatchToProps= (dispatch) =>{
    const getMore = (page) => {
        GET_users(page, (items)=>{
            let action = addUsers(items);
            dispatch(action);
        });
    };

    return {
        getMore: getMore
    };
}

const FindUserContainer = connect(mapStateToProps,mapDispatchToProps)(FindUser);

export default FindUserContainer;