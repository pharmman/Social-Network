import React from 'react';
import {Profile} from './Profile';
import {getProfileStatus, getUserProfile, ProfileType, updateProfileStatus} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from 'react-router'
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnProps

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    updateProfileStatus: (status: string) => void
    getProfileStatus: (userId: string) => void
}

export type OwnProps = MapStateToPropsType & MapDispatchToPropsType;

class ProfileContainer extends React.Component<ProfileContainerType, StateType> {
    componentDidMount() {
        let userId: string
        !this.props.match.params.userId ? userId = '2' : userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
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
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirect,
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
        getUserProfile,
        updateProfileStatus,
        getProfileStatus
    }))(ProfileContainer)



