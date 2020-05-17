import {withRouter} from "react-router"
import {connect} from "react-redux";
import Prof from "./Prof";
import {getProfile} from "../../../redux/utils";
import withLoginRedirect from "../../HOC/withLoginRedirect";

const mapStateToProps = (state,ownProps) => {
    const State = state.ProfileContentPage;
    return {
        text                     : "",
        loading                  : State.loading,
        aboutme                  : State.aboutme,
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


const ProfContainer = connect(mapStateToProps, {getProfile})(withRouter(Prof));
export default ProfContainer;