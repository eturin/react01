import React from "react";
import css from "./Loading.module.css";


const Loading = ()=>{
    return (
        <p className={css.Loading}><img className={css.ImgBack} src='/loading.gif'/></p>
    );
}

export default Loading;