import {connect} from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) =>{
    let mPosts = state.ProfileContentPage.mPosts;
    mPosts.sort((a,b)=>{ return b.id-a.id;});

    return {
        mPosts: mPosts
    }

};

const PostsContainer = connect(mapStateToProps, {})(Posts);
export default PostsContainer;