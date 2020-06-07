import React from "react";
import css from './NavUsers.module.css'

class NavUsers extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let mJSXButton = [];
        if(Math.max(this.props.page-5,1)!==1)
            mJSXButton.push(<span key={-1}><span className={1===this.props.Page ? css.ActiveSpan:css.Span} key={1} onClick={(e) => {this.props.setPage(1);}} >{1}</span><span>...</span></span>);
        for(let i=Math.max(this.props.page-5,1);i<=Math.min(this.props.page+5,this.props.totalPage);++i)
            if(i!==this.props.page)
                mJSXButton.push(<span className={css.Span} key={i} onClick={(e) => {this.props.setPage(i);}} >{i}</span>);
            else
                mJSXButton.push(<span key={-2}><span>  </span><span className={css.ActiveSpan} key={i} onClick={(e) => {this.props.setPage(i);}} >{i}</span><span>  </span></span>);
        if(Math.min(this.props.page+5,this.props.totalPage)!==this.props.totalPage)
            mJSXButton.push(<span key={-3}><span>...</span><span className={1===this.props.Page ? css.ActiveSpan:css.Span} key={this.props.totalPage} onClick={(e) => {this.props.setPage(this.props.totalPage);}} >{this.props.totalPage}</span></span>);

        return (
            <div className={css.NavUsers}>
                { mJSXButton }
                <span> </span>
                <span>
                    <select onChange={(e) => {this.props.setCount(parseInt(e.target.value))} }>
                        <option>{this.props.countItem}</option>
                        <option>3</option>
                        <option>10</option>
                        <option>20</option>
                    </select>
                </span>
            </div>
        );
    }
}

export default NavUsers;