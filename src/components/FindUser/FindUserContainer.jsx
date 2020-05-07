import React from "react";
import {connect} from "react-redux";
import FindUser from "./FindUser";
import {addUsers, GET_users, setPage} from "../../redux/utils";


const mapStateToProps   = (state, ownProps) =>{
    return {
        Page        : state.FindUserPage.Page,
        totalPage   : state.FindUserPage.totalPage,
        count       : state.FindUserPage.count,
        mUsers      : state.FindUserPage.mUsers.filter(x=>x.page===state.FindUserPage.Page)
    }
}
const mapDispatchToProps= (dispatch) =>{
    return {
        getMore     : (count,Page,totalCount) => { GET_users(count,  Page, (Page,items,totalCount)=>{ dispatch(addUsers(Page,items,totalCount));} ); },
        setPage     : (Page) =>{dispatch(setPage(Page));},
    };
}

const FindUserContainer = connect(mapStateToProps,mapDispatchToProps)(FindUser);

export default FindUserContainer;