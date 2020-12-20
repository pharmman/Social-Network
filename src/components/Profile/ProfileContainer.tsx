import {StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import React from 'react';
import {ProfileType, setProfile, toggleFetching} from '../../redux/profile-reducer';
import axios from 'axios';
import {connect} from 'react-redux';

export type MapStateToPropsType = {
    profile: ProfileType | null
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
    toggleFetching: (isFetching: boolean) => void
}

type ResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: {
        small: string
        large: string
    }
}

class ProfileContainer extends React.Component<ProfilePropsType, StateType> {

    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.toggleFetching(false)
            this.props.setProfile(response.data)
        })
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        );
    }
}


const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>
(mapStateToProps, {setProfile, toggleFetching})(ProfileContainer)