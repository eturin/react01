import React from "react";
import css from './Items.module.css'
import Item from '../Item/Item'

const Items=(props)=>{
    props.mPosts.sort((a,b)=>{ return b.id-a.id;});
    let mJSXPosts = props.mPosts.map(x => <Item  text={x.text} img={x.img} cnt={x.cnt} id={x.id}/>);

    return (
        <div>
            { mJSXPosts }
        </div>
    );
}

export default Items;