import React from "react";
import cls from './Items.module.css'
import Item from '../Item/Item'

const Items=(props)=>{
    let mJSXPosts = props.mPosts.map(x => <Item text={x.text} img={x.img} cnt={x.cnt} id={x.id}/>);

    return (
        <div className>
            { mJSXPosts }
        </div>
    );
}

export default Items;