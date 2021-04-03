import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    updateProfile: (profile: ProfileType) => Promise<any>
    profile: ProfileType | null
    updateProfileStatus: (status: string) => void
    updateProfilePhoto: (photo:File) => void
    status: string
    isOwner: boolean
}

export function Profile(props: ProfilePropsType) {
    return (
        <>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile} status={props.status}
                updateProfile={props.updateProfile}
                updateProfilePhoto={props.updateProfilePhoto}
                updateProfileStatus={props.updateProfileStatus}/>
            {/*<MyPostsContainer/>*/}
        </>
    )
}

