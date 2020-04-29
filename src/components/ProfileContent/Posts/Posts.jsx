import React, {useState} from "react";
import css from './Posts.module.css'
import NewPost from './New/NewPost'
import Items from './Items/Items'

const Posts = (props)=>{
    const [v, f] = useState([]);

    return (
        <div>
            <NewPost reloadPosts={{v:v,f:f}} dispatch={props.dispatch} from='ProfileContent'/>
            <Items dispatch={props.dispatch}/>
        </div>
    );
}

export default Posts;
