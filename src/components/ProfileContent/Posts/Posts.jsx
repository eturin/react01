import React, {useState} from "react";
import css from './Posts.module.css'
import NewPost from './New/NewPost'
import Items from './Items/Items'

const Posts = (props)=>{
    const [v, f] = useState([]);

    return (
        <div>
            <NewPost reloadPosts={{v:v,f:f}} fAdd={props.store.fAddPost.bind(props.store)} getText={props.store.getPostText.bind(props.store)} setText={props.store.setPostText.bind(props.store)}/>
            <Items store={props.store}/>
        </div>
    );
}

export default Posts;
