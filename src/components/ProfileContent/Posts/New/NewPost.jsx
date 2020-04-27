import React from "react";
import css from './NewPost.module.css'

const NewPost = (props)=>{
    const refText = React.createRef();

    const onClick_ButtonAdd = () => {
        const text = refText.current.value;
        props.fAddPost(text,'/predator.jpeg');
        props.state.f(props.state.v+1);
        refText.current.value='';
    };

    return (
        <div className={css.NewPost}>
            <textarea ref={ refText }></textarea>
            <button className={css.Button} onClick={ onClick_ButtonAdd }>Добавить</button>
        </div>
    );
}

export default NewPost;