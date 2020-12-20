import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../redux/profile-reducer';


type ProfilePropsType = {
    profile: ProfileType | null
}

export function Profile(props:ProfilePropsType) {
    return (

        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

