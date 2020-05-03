import React from "react";
import css from './Items.module.css'
import Item from '../Item/Item'
import Friend from "../../../NavBar/Friend/Friend";

const Items=(props)=>{
    let mJSXPosts = props.mPosts.map(x => <Item  text={x.text} img={x.img} cnt={x.cnt}  key={x.id} id={x.id}/>);

    return (
        <div>
            { mJSXPosts }
        </div>
    );
}

export default Items;