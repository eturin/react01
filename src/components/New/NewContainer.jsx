import React, {useState} from "react";
import New from "./New";
import {connect} from "react-redux";
import {DIALOGS, f_add, PROFILE_CONTENT, set_text} from "../../redux/utils";

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
        fAdd             :fAdd,
        onChange_Textarea:onChange_Textarea
    }
};
const NewContainer = connect(mapStateToProps, mapDispatchToProps)(New);

export default NewContainer;