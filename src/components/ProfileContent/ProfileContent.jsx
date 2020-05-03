import React from "react";
import css from './ProfileContent.module.css'
import Prof from "./Prof/Prof";
import PostsContainer from "./Posts/PostsContainer";

const ProfileContent=(props)=>{
    return (
        <div className={css.ProfileContent}>
            <div className={css.ContentHeader}><img src='16.jpg'/></div>
            <Prof />
            <PostsContainer />
        </div>
    );
}

export default ProfileContent;