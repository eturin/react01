import React, {useState} from "react";
import New from "./New";
import {connect} from "react-redux";
import {DIALOGS, f_add, PROFILE_CONTENT, set_text} from "../../redux/utils";

/*const NewContainer_ = (props) =>{
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
}*/

const mapStateToProps = (state) =>{
    let from = window.location.pathname.split('/')[1]==='profile' ? PROFILE_CONTENT : DIALOGS;
    let text = from == PROFILE_CONTENT ? state.ProfileContentPage.text: state.DialogsPage.text;

    return {
        from: from,
        text:text
    };
};
const mapDispatchToProps = (dispatch) =>{
    let from = window.location.pathname.split('/')[1]==='profile' ? PROFILE_CONTENT : DIALOGS;

    const fAdd  = () => {
        let action = f_add(from);
        dispatch(action);
    };
    const onChange_Textarea = (event) =>{
        const text = event.target.value;

        let action = set_text(text, from);
        dispatch(action);
    };

    return {
        fAdd:fAdd,
        onChange_Textarea:onChange_Textarea
    }
};
const NewContainer = connect(mapStateToProps, mapDispatchToProps)(New);

export default NewContainer;