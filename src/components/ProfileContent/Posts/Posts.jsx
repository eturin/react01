import React from "react";
import cls from './Posts.module.css'
import NewPost from './New/NewPost'
import Items from './Items/Items'

const Posts = ()=>{
    return (
        <div>
            <NewPost />
            <Items />
        </div>
    );
}

export default Posts;
