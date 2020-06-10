import React from "react";
import css from './NavUsers.module.css'
import {NavLink} from "react-router-dom";

class NavUsers extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let mJSXButton = [];
        if(Math.max(this.props.page-5,1)!==1)
            mJSXButton.push(<span key={-1}><NavLink to={`/finduser/${this.props.countItem}/1`}><span className={1===this.props.Page ? css.ActiveSpan:css.Span} key={1} onClick={(e) => {this.props.setPage(1);}} >{1}</span></NavLink><span>...</span></span>);
        for(let i=Math.max(this.props.page-5,1);i<=Math.min(this.props.page+5,this.props.totalPage);++i)
            if(i!==this.props.page)
                mJSXButton.push(<NavLink key={i}  to={`/finduser/${this.props.countItem}/${i}`}><span className={css.Span} onClick={(e) => {this.props.setPage(i);}} >{i}</span></NavLink>);
            else
                mJSXButton.push(<NavLink key={i}  to={`/finduser/${this.props.countItem}/${i}`}><span>  </span><span className={css.ActiveSpan} key={i} onClick={(e) => {this.props.setPage(i);}} >{i}</span><span>  </span></NavLink>);
        if(Math.min(this.props.page+5,this.props.totalPage)!==this.props.totalPage)
            mJSXButton.push(<span key={-3}><span>...</span><NavLink to={`/finduser/${this.props.countItem}/${this.props.totalPage}`}><span className={this.props.totalPage===this.props.Page ? css.ActiveSpan:css.Span} key={this.props.totalPage} onClick={(e) => {this.props.setPage(this.props.totalPage);}} >{this.props.totalPage}</span></NavLink></span>);

        return (
            <div className={css.NavUsers}>
                { mJSXButton }
                <span> </span>
                <span>
                    <select onChange={(e) => {this.props.setCount(parseInt(e.target.value))} }>
                        {this.props.countItem!==3 && this.props.countItem!==10 && this.props.countItem!==20 && this.props.countItem!==50 && this.props.countItem!==100 ? <option>{this.props.countItem}</option> : ''}
                        <option>3</option>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </span>
            </div>
        );
    }
}

export default NavUsers;