import React from "react";
import Items from "./Items";

const ItemsContainer = (props) =>{
    let mPosts = props.store.getPosts(props.store.getState().ProfileContentPage);
    mPosts.sort((a,b)=>{ return b.id-a.id;});

    return <Items mPosts={ mPosts }/>
}

export default ItemsContainer;