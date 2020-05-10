import React from "react";
import {connect} from "react-redux";
import FindUser from "./FindUser";
import {addUsers, GET_users, setCount, setPage} from "../../redux/utils";


const mapStateToProps   = (state, ownProps) =>{
    return {
        Page        : state.FindUserPage.Page,
        totalPage   : state.FindUserPage.totalPage,
        countItem   : state.FindUserPage.count,
        mUsers      : state.FindUserPage.mUsers
    }
}
const mapDispatchToProps= (dispatch) =>{
    return {
        getMore     : (count,Page,totalCount) => { GET_users(count,  Page, (Page,items,totalCount)=>{ dispatch(addUsers(Page,items,totalCount));} ); },
        setPage     : (Page) =>{dispatch(setPage(Page));},
        setCount    : (count) => {dispatch(setCount(count))}
    };
}

const FindUserContainer = connect(mapStateToProps,mapDispatchToProps)(FindUser);

export default FindUserContainer;