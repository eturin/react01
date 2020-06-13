import React from "react";
//import css from './Posts.module.css'
import Items from "./Items/Items";

const Posts = (props)=>{

    return (
        <div>

            <Items mPosts={ props.mPosts }/>
        </div>
    );
}

export default Posts;
