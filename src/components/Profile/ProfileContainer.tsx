import React from 'react';
import {Profile} from './Profile';
import {
    getProfileStatus,
    getUserProfile,
    ProfileType, updateProfile,
    updateProfilePhoto,
    updateProfileStatus
} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from 'react-router'
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    updateProfileStatus: (status: string) => void
    updateProfilePhoto: (file: File) => void,
    getProfileStatus: (userId: string) => void
    updateProfile: (profile:ProfileType) => any
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;

class ProfileContainer extends React.Component<ProfileContainerType, StateType> {

    renderProfile() {
        let userId: string
        if (this.props.match.params.userId) {
            userId = this.props.match.params.userId
            this.props.getUserProfile(userId)
            this.props.getProfileStatus(userId)
        }
        if (!this.props.match.params.userId && this.props.authorizedUserId) {
            userId = this.props.authorizedUserId.toString()
            this.props.getUserProfile(userId)
            this.props.getProfileStatus(userId)
        }
        if (!this.props.match.params.userId && !this.props.authorizedUserId) {
            this.props.history.push('/login')
        }
    }

    componentDidMount() {
        this.renderProfile()

    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<StateType>, snapshot?: any) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.renderProfile()
        }
    }


    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    updateProfilePhoto={this.props.updateProfilePhoto}
                    updateProfile={this.props.updateProfile}
                    status={this.props.status}
                    profile={this.props.profile}
                    updateProfileStatus={this.props.updateProfileStatus}
                    isOwner={!this.props.match.params.userId}/>
            </>
        )
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        userId: state.profilePage.profile?.userId
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirect,
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
        getUserProfile,
        updateProfileStatus,
        getProfileStatus,
        updateProfilePhoto,
        updateProfile
    }))(ProfileContainer)



