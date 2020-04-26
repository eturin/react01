import React from "react";
import cls from './Posts.module.css'
import NewPost from './New/NewPost'
import Items from './Items/Items'

const Posts = (props)=>{
    return (
        <div>
            <NewPost />
            <Items mPosts={props.mPosts}/>
        </div>
    );
}

export default Posts;
