import React from "react";
import css from "./FindUser.module.css"
import ItemContainer from "./Item/ItemContainer";

const FindUser = (props) => {
    let mJSXItems = props.mUsers.map(x => <ItemContainer key={x.id} id={x.id} />);
    return (
        <div className={css.FindUser}>
            <p className={ css.P }>Пользователи</p>
            <div>
                { mJSXItems}
            </div>
            <div className={css.DivB}>
                <button className={css.Button} title='Показать ещё' onClick={ () => {props.getMore(props.page);} }>Показать ещё</button>
            </div>
        </div>
    );
}

export default FindUser;