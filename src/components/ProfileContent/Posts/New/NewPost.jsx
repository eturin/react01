import React,{useState} from "react";
import css from './NewPost.module.css'

const NewPost = (props)=>{
    const [v,f]=useState([]);
    const refText = React.createRef();

    const onClick_ButtonAdd = () => {
        props.fAdd();
        props.reloadPosts.f(props.reloadPosts.v+1);
        f(v+1);
    };

    const onChange_Textarea = () =>{
        const text = refText.current.value;
        props.setText(text);
        f(v+1);
    }

    return (
        <div className={css.NewPost}>
            <textarea ref={ refText } value={props.getText()} onChange={ onChange_Textarea }/>
            <button className={css.Button} onClick={ onClick_ButtonAdd }>Добавить</button>
        </div>
    );
}

export default NewPost;