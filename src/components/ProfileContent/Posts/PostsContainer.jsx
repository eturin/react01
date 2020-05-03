import React from "react";
import {connect} from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) =>{
    let mPosts = state.ProfileContentPage.mPosts;
    mPosts.sort((a,b)=>{ return b.id-a.id;});

    return {
        mPosts: mPosts
    }

};
const mapDispatchToProps = (dispatch) =>{
    return {};
};
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;