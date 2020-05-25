import Friends from "./Friends";
import {connect} from "react-redux";
import {getFriends} from "../../UTILS/utils";

const mapStateToProps = (state) =>{
    return {
        mFriends:getFriends(state)
    };
}
const mapDispatchToProps = (dispatch) =>{
    return {};
}
const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends);

export default FriendsContainer;
