import React, {useState} from "react";
import css from './Posts.module.css'
import NewPost from './New/NewPost'
import Items from './Items/Items'

const Posts = (props)=>{
    const [v, f] = useState([]);
    return (
        <div>
            <NewPost state={{reloadPosts:{v:v,f:f},
                                fAddPost:props.state.fAddPost,
                                 newPost:props.state.newPost}}/>
            <Items mPosts={props.state.mPosts}/>
        </div>
    );
}

export default Posts;
