import React, {useState} from "react";
import New from "./New";

const NewContainer = (props) =>{
    const [v,f]=useState([]);
    const from = props.from==='ProfileContent' ? props.store.actionCreaters.c.PROFILE_CONTENT
                                               : props.store.actionCreaters.c.DIALOGS;
    let state  = props.from==='ProfileContent' ? props.store.getState().ProfileContentPage
                                               : props.store.getState().DialogsPage;

    let action = props.store.actionCreaters.f.f_add(from);
    const text = props.store.getText(state);

    const fAdd  = () => {
        props.store.dispatch(action);
        props.reloadPosts.f(props.reloadPosts.v+1)
    };
    const onChange_Textarea = (event) =>{
        const text = event.target.value;
        let action = props.store.actionCreaters.f.set_text(text, from);
        props.store.dispatch(action);
        f(v+1);
    };

    return <New fAdd={ fAdd } text={ text } onChange_Textarea={ onChange_Textarea }/>
}

export default NewContainer;