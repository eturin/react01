import React from "react";
import css from './NavUsers.module.css'
import {NavLink} from "react-router-dom";

class NavUsers extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let mJSXButton = [];
        if(Math.max(this.props.page-5,1)!=1)
            mJSXButton.push(<span><span className={1===this.props.Page ? css.ActiveSpan:css.Span} key={1} onClick={(e) => {this.props.setPage(1);}} >{1}</span><span>...</span></span>);
        for(let i=Math.max(this.props.page-5,1);i<=Math.min(this.props.page+5,this.props.totalPage);++i)
            if(i!=this.props.page)
                mJSXButton.push(<span className={css.Span} key={i} onClick={(e) => {this.props.setPage(i);}} >{i}</span>);
            else
                mJSXButton.push(<span><span>  </span><span className={css.ActiveSpan} key={i} onClick={(e) => {this.props.setPage(i);}} >{i}</span><span>  </span></span>);
        if(Math.min(this.props.page+5,this.props.totalPage)!=this.props.totalPage)
            mJSXButton.push(<span><span>...</span><span className={1===this.props.Page ? css.ActiveSpan:css.Span} key={this.props.totalPage} onClick={(e) => {this.props.setPage(this.props.totalPage);}} >{this.props.totalPage}</span></span>);

        return (
            <div className={css.NavUsers}>
                { mJSXButton }
            </div>
        );
    }
}

export default NavUsers;