import React from "react";
import {connect} from "react-redux";
import {onFollow, Follow_UnFollow} from "../../../redux/utils";
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
    return {
        onFollow: (isFollow,id) => {Follow_UnFollow(isFollow,
                                                    id,
                                                    (isFolow,id)=>{dispatch(onFollow(id,isFolow));});}
    };
}

const ItemContainer = connect(mapStateToProps,mapDispatchToProps)(Item);

export default ItemContainer;