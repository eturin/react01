import React from "react";
import css from './Items.module.css'
import Item from '../Item/Item'

const Items=(props)=>{
    let mPosts = props.store.getPosts(props.state);
    mPosts.sort((a,b)=>{ return b.id-a.id;});

    let mJSXPosts = mPosts.map(x => <Item  text={x.text} img={x.img} cnt={x.cnt} id={x.id}/>);

    return (
        <div>
            { mJSXPosts }
        </div>
    );
}

export default Items;