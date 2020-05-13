import {withRouter} from "react-router"
import {connect} from "react-redux";
import Prof from "./Prof";
import {getProfile, setLoadinProf, setProfile} from "../../../redux/utils";

const mapStateToProps = (state,ownProps) => {
    const State = state.ProfileContentPage;
    return {
        text                     : "",
        loading                  : State.loading,
        status                   : State.status,
        lookingForAJob           : State.lookingForAJob,
        lookingForAJobDescription: State.lookingForAJobDescription,
        fullName                 : State.fullName,
        github                   : State.contacts.github,
        vk                       : State.contacts.vk,
        facebook                 : State.contacts.facebook,
        instagram                : State.contacts.instagram,
        twitter                  : State.contacts.twitter,
        website                  : State.contacts.website,
        youtube                  : State.contacts.youtube,
        mainLink                 : State.contacts.mainLink,
        large                    : State.large
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (id) => {getProfile(id,
                              (id) => {dispatch(setLoadinProf(id))},
                               (id,obj)=> {dispatch(setProfile(id,obj))});}
    };
}

const ProfContainer = connect(mapStateToProps,mapDispatchToProps)(withRouter(Prof));
export default ProfContainer;