import React from "react";
import cls from './ProfileContent.module.css'
import Prof from "./Prof";
import Posts from "./Posts";

const ProfileContent=()=>{
    return (
        <div className={cls.ProfileContent}>
            <div className={cls.ContentHeader}><img src='16.jpg'/></div>
            <Prof />
            <Posts />
        </div>);
}

export default ProfileContent;