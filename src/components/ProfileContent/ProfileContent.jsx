import React from "react";
import cls from './ProfileContent.module.css'
import Prof from "./Prof/Prof";
import Posts from "./Posts/Posts";

const ProfileContent=(props)=>{
    return (
        <div className={cls.ProfileContent}>
            <div className={cls.ContentHeader}><img src='16.jpg'/></div>
            <Prof />
            <Posts mPosts={props.mPosts}/>
        </div>);
}

export default ProfileContent;