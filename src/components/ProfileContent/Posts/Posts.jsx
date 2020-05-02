import React, {useState} from "react";
import css from './Posts.module.css'
import ItemsContainer from "./Items/ItemsContainer";
import NewContainer from "../../New/NewContainer";

const Posts = (props)=>{
    const [v, f] = useState([]);

    return (
        <div>
            <NewContainer   reloadPosts={ {v:v,f:f} } store={ props.store } from="ProfileContent" />
            <ItemsContainer store={ props.store }  />
        </div>
    );
}

export default Posts;
