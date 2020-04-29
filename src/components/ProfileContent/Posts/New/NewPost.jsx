import React,{useState} from "react";
import css from './NewPost.module.css'

const NewPost = (props)=>{
    const [v,f]=useState([]);

    const onClick_ButtonAdd = () => {
        props.dispatch({type:'fAdd', from:props.from});
        props.reloadPosts.f(props.reloadPosts.v+1);
        f(v+1);
    };

    const onChange_Textarea = (event) =>{
        const text = event.target.value;
        props.dispatch({type:'setText', text:text, from:props.from});
        f(v+1);
    }

    return (
        <div className={css.NewPost}>
            <textarea placeholder="Текст нового сообщения"
                      value={props.dispatch({type:'getText',from:props.from})}
                      onChange={ onChange_Textarea }/>
            <button className={css.Button} onClick={ onClick_ButtonAdd }>Добавить</button>
        </div>
    );
}

export default NewPost;