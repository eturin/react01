import {connect} from "react-redux";
import FindUser from "./FindUser";
import {getMore, setCount, setPage} from "../../redux/findUserReducer";
import {getCountItem, getPage, getTotalPage, getUsers} from "../UTILS/utils";


/*const mapStateToProps   = (state, ownProps) =>{
    return {
        Page        : state.FindUserPage.Page,
        totalPage   : state.FindUserPage.totalPage,
        countItem   : state.FindUserPage.count,
        mUsers      : state.FindUserPage.mUsers
    }
}*/
const mapStateToProps   = (state, ownProps) =>{
    return {
        Page        : getPage(state),
        totalPage   : getTotalPage(state),
        countItem   : getCountItem(state),
        mUsers      : getUsers(state)
    }
}

const FindUserContainer = connect(mapStateToProps, {setPage,setCount,getMore})(FindUser);
export default FindUserContainer;