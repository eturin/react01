import React,{useState} from "react";
import css from './New.module.css'

const New = (props)=>{
    return (
        <div className={ css.NewPost }>
            <textarea placeholder="Текст нового сообщения"
                      value={ props.text }
                      onChange={ props.onChange_Textarea }/>
            <button className={css.Button} onClick={ props.fAdd }>Добавить</button>
        </div>
    );
}

export default New;