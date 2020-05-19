import React from "react";
import css from './Posts.module.css'
import NewContainer from "../../New/NewContainer";
import Items from "./Items/Items";

const Posts = (props)=>{
    return (
        <div>

            <Items mPosts={ props.mPosts }/>
        </div>
    );
}
//<NewContainer  />
export default Posts;
