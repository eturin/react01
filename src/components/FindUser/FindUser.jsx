import React from "react";
import css from "./FindUser.module.css"
import ItemContainer from "./Item/ItemContainer";

class FindUser extends React.Component {
    constructor(props) { super(props); }; /*нельзя заменить на стрелочную функцию*/
    render = () => {
        if(this.props.mUsers.length===0) this.props.getMore(this.props.page);

        let mJSXItems = this.props.mUsers.map(x => <ItemContainer key={x.id} id={x.id} />);
        return (
            <div className={css.FindUser}>
                <p className={ css.P }>Пользователи</p>
                <div>
                    { mJSXItems}
                </div>
                <div className={css.DivB}>
                    <button className={css.Button} title='Показать ещё' onClick={ () => {this.props.getMore(this.props.page);} }>Показать ещё</button>
                </div>
            </div>
        );
    }
}

export default FindUser;