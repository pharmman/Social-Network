import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile: ProfileType | null
    updateProfileStatus: (status: string) => void
    updateProfilePhoto: (photo:File) => void
    status: string
    owner: boolean
}

export function Profile(props: ProfilePropsType) {
    return (
        <>
            <ProfileInfo
                owner={props.owner}
                profile={props.profile} status={props.status}
                updateProfilePhoto={props.updateProfilePhoto}
                updateProfileStatus={props.updateProfileStatus}/>
            <MyPostsContainer/>
        </>
    )
}

