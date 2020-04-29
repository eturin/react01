import React from "react";
import css from './Friends.module.css'
import Friend from "../Friend/Friend";

const Friends = (props) =>{
    let mFriends = props.dispatch({type:'getFriends'});

    let mJSXFriends = mFriends.map(x => <Friend img={x.img} name={x.name}/>);

    return (
        <div className={css.Friends}>
            <span>Друзья</span>
            <div className={css.Block}>
                { mJSXFriends }
            </div>
        </div>
    );
}

export default Friends;