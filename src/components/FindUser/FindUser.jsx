import React from "react";
import css from "./FindUser.module.css";
import ItemContainer from "./Item/ItemContainer";
import NavUsers from './NavUsers/NavUsers'

class FindUser extends React.Component {
    constructor(props) {/*нельзя заменить на стрелочную функцию*/
        super(props);
    };
    componentDidMount = () => {
        this.props.getMore(this.props.count,this.props.Page);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.Page!=this.props.Page)
            this.props.getMore(this.props.count,this.props.Page);
    }

    render = () => {
        let mJSXItems = this.props.mUsers.map(x => <ItemContainer key={x.id} id={x.id} />);
        const jsx = mJSXItems.length===0 ? <p className={css.Loading}><img className={css.ImgBack} src='/loading.gif'/><img src='/loading2.gif'/><img src='/loading.gif'/></p>:<>{mJSXItems}</>;

        return (
            <div className={css.FindUser}>
                <p className={ css.P }>Пользователи</p>
                <NavUsers page={this.props.Page}  setPage={this.props.setPage} totalPage={this.props.totalPage}/>
                <div>
                    { jsx }
                </div>
                <NavUsers page={this.props.Page} setPage={this.props.setPage} totalPage={this.props.totalPage}/>
            </div>
        );
    }
}

export default FindUser;