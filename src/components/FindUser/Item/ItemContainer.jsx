import React from "react";
import {connect} from "react-redux";
import {onFollow} from "../../../redux/utils";
import Item from "./Item";

const mapStateToProps   = (state,ownProps) =>{
    let x = state.FindUserPage.mUsers.find(x => x.id===ownProps.id);
    return {
        key    : x.id,
        id     : x.id,
        name   : x.name,
        img    : x.img,
        country: x.country,
        city   : x.city,
        comment: x.comment,
        follow : x.follow,
        x      : x
    }
}
const mapDispatchToProps= (dispatch) =>{
    const onClickFollow = (id) => {
        const action = onFollow(id);
        dispatch(action);
    };

    return {
        onFollow: onClickFollow
    };
}

const ItemContainer = connect(mapStateToProps,mapDispatchToProps)(Item);

export default ItemContainer;