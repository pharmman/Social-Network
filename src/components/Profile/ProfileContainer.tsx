import React from 'react';
import {Profile} from './Profile';
import axios from 'axios'
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from 'react-router'

type PathParamsType = {
    userId: string
}

type ProfileContainerType = RouteComponentProps<PathParamsType> & OwnProps

type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type OwnProps = mapStateToPropsType & mapDispatchToPropsType;

class ProfileContainer extends React.Component<ProfileContainerType, StateType> {
    componentDidMount() {
        let userId:string
        !this.props.match.params.userId ? userId = '2' : userId = this.props.match.params.userId
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)
export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, StateType>(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)



