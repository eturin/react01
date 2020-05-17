import React from "react";
import css from './EditLine.module.css'

const EditLine = (props) =>{
    const stopEditLine = ()=>{
        props.stopEditLine(props.id,props.source,props.editText);
    }
    const onKeyDown = (e)=>{
        if(e.key==='Enter') props.stopEditLine(props.id,props.source,props.editText);
    }
    return (
        <>
            <div>
                <input hidden={!props.isEdit}
                       onBlur={ stopEditLine }
                       onKeyDown={ onKeyDown }
                       onChange={(e)=>{
                           props.updateEditLine(props.id,e.target.value);
                       }}
                       value={props.editText} />
            </div>
            <div hidden={props.isEdit}
                 style={{width: '100%',height:'21px'}}
                 onDoubleClick={()=>{
                     props.startEditLine(props.id,props.source);
                 }}>
                    {props.text}
            </div>
        </>
    )
}

export default EditLine;