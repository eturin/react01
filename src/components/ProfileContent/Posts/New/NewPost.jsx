import React from "react";
import cls from './NewPost.module.css'

const NewPost = ()=>{
    return (
        <div className={cls.NewPost}>
            <textarea></textarea>
            <button className={cls.Botton}>Добавить</button>
        </div>
    );
}

export default NewPost;