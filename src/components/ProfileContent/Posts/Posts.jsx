import React, {useState} from "react";
import css from './Posts.module.css'
import NewPost from './New/NewPost'
import Items from './Items/Items'

const Posts = (props)=>{
    const [v, f] = useState([]);

    return (
        <div>
            <NewPost reloadPosts={{v:v,f:f}} store={props.store} fAdd={props.store.fAddPost} getText={props.store.getPostText} setText={props.store.setPostText}/>
            <Items store={props.store}/>
        </div>
    );
}

export default Posts;
