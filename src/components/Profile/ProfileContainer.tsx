import {StateType} from '../../redux/redux-store';
import {Profile} from './Profile';
import React from 'react';
import {addPost, changingValueForNewPost, ProfileType, setProfile, toggleFetching} from '../../redux/profile-reducer';
import axios from 'axios';
import {connect} from 'react-redux';

export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapDispatchToPropsType = {
    addPost: () => void,
    changingValueForNewPost: (newValue: string) => void
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
                <Profile profile={this.props.profile}/>
            </>
        );
    }
}


const mapStateToProps = (state: StateType) => {
return {
    posts: state.profilePage.posts,
    messageForNewPost: state.profilePage.messageForNewPost,
    profile: state.profilePage.profile
} as const
}


export default connect<MapStateToPropsType, MapDispatchToPropsType,{}, StateType>
(mapStateToProps, {addPost,changingValueForNewPost, setProfile, toggleFetching})(ProfileContainer)