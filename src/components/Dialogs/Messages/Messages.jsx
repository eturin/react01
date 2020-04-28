import React,{useState} from "react";
import css from './Messages.module.css'
import Message from "../Message/Message";
import NewPost from "../../ProfileContent/Posts/New/NewPost";

const Messages = (props) =>{
    const [v,f] = useState([]);

    let mJSXMessages=[];
    if(props.mKey!=undefined)
        mJSXMessages=props.mKey.map(i => <Message text={props.state.mMessage[i].text} img={props.state.mMessage[i].img} my={props.state.mMessage[i].my} id={i}/>);

    props.state.newPost.setId(props.id);

    return (
        <div className={css.Messages}>
            <span>Сообщения</span>
            { mJSXMessages }
            <NewPost state={{reloadPosts:{v:v,f:f},
                                fAddPost:props.state.fAddMessage,
                                 newPost:props.state.newPost}}/>
        </div>
    );
};

export  default Messages;
