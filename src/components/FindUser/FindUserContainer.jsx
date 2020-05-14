import {connect} from "react-redux";
import FindUser from "./FindUser";
import {getMore, setCount, setPage} from "../../redux/utils";


const mapStateToProps   = (state, ownProps) =>{
    return {
        Page        : state.FindUserPage.Page,
        totalPage   : state.FindUserPage.totalPage,
        countItem   : state.FindUserPage.count,
        mUsers      : state.FindUserPage.mUsers
    }
}

const FindUserContainer = connect(mapStateToProps, {setPage,setCount,getMore})(FindUser);
export default FindUserContainer;