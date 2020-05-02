import React from "react";
import css from './ProfileContent.module.css'
import Prof from "./Prof/Prof";
import Posts from "./Posts/Posts";

const ProfileContent=(props)=>{
    return (
        <div className={css.ProfileContent}>
            <div className={css.ContentHeader}><img src='16.jpg'/></div>
            <Prof />
            <Posts store={props.store} />
        </div>);
}

export default ProfileContent;