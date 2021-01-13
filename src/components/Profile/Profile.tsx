import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profile: ProfileType | null
    updateProfileStatus: (status: string) => void
    status: string
}

export function Profile(props: ProfilePropsType) {
    return (
        <>
            <ProfileInfo
                profile={props.profile} status={props.status}
                updateProfileStatus={props.updateProfileStatus}/>
            <MyPostsContainer/>
        </>
    )
}

