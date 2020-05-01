import React,{useState} from "react";
import css from './NewPost.module.css'

const NewPost = (props)=>{
    const [v,f]=useState([]);

    const onClick_ButtonAdd = () => {
        let action = props.store.actionCreaters.f.f_add(props.from);
        props.dispatch(action);
        props.reloadPosts.f(props.reloadPosts.v+1);
        f(v+1);
    };

    const onChange_Textarea = (event) =>{
        const text = event.target.value;
        let action = props.store.actionCreaters.f.set_text(text,props.from);
        props.dispatch(action);
        f(v+1);
    }

    return (
        <div className={css.NewPost}>
            <textarea placeholder="Текст нового сообщения"
                      value={props.store.getText(props.state)}
                      onChange={ onChange_Textarea }/>
            <button className={css.Button} onClick={ onClick_ButtonAdd }>Добавить</button>
        </div>
    );
}

export default NewPost;