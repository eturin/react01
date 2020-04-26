import React from "react";
import cls from './NewPost.module.css'

const NewPost = ()=>{
    const refText = React.createRef();
    const onClick_ButtonAdd = () => {
        const text = refText.current.value;
        alert(text);
    };

    return (
        <div className={cls.NewPost}>
            <textarea ref={ refText }></textarea>
            <button className={cls.Button} onClick={ onClick_ButtonAdd }>Добавить</button>
        </div>
    );
}

export default NewPost;