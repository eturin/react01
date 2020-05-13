import {connect} from "react-redux";
import Auth from "./Auth";
import {authMe, setLoadingMe, setMe} from "../../../redux/utils";

const mstp = (state)=>{
    return {
      id     : state.Auth.data.id,
      login  : state.Auth.data.login,
      loading: state.Auth.loading,
      cnt    : state.Auth.cnt
    };
}
const mdtp = (dispatch) => {
    return {
        authMe: () => authMe(()=>{dispatch(setLoadingMe());},
                              (data)=>{dispatch(setMe(data));}
                              )
    }
}

export default connect(mstp,mdtp)(Auth);