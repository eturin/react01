import React from "react";
import './ProfileContent.css'
import Prof from "./Prof";
import Posts from "./Posts";

const ProfileContent=()=>{
    return (
        <div className='ProfileContent-wraper'>
            <div className='cont-header'><img src='16.jpg'/></div>
            <Prof/>
            <Posts/>
        </div>);
}

export default ProfileContent;