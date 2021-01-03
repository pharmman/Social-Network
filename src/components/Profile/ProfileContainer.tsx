import React from 'react';
import {Profile} from './Profile';
import {getUserProfile, ProfileType} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from 'react-router'

type PathParamsType = {
    userId: string
}

type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnProps

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    getUserProfile: (userId:string) => void
}

export type OwnProps = MapStateToPropsType & MapDispatchToPropsType;

class ProfileContainer extends React.Component<ProfileContainerType, StateType> {
    componentDidMount() {
        let userId:string
        !this.props.match.params.userId ? userId = '2' : userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter)



