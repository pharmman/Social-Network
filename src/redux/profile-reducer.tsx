import {ActionsType, ProfilePageType} from './store';
import {profileAPI} from '../api/api';
import {Dispatch} from 'redux';

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

const initialState: ProfilePageType = {
    profile: null,
    messageForNewPost: '',
    status: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
        {id: 3, message: 'Yo Yo Yo', likesCount: 12},
        {id: 4, message: 'It\'s revolution Jhonny!', likesCount: 100500}
    ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.value, likesCount: 0}],
            }
        case 'SET-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-PROFILE-STATUS':
            return {
                ...state,
                status: action.status
            }
        default :
            return state
    }
}
export type AddPostActionType = {
    type: 'ADD-POST',
    value:string
}

export type SetProfileStatusType = {
    type: 'SET-PROFILE-STATUS'
    status: string
}

export type SetProfileType = ReturnType<typeof setUserProfile>


export const addPostActionCreator = (value:string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        value
    }
};

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-PROFILE',
        profile
    } as const
}

export const setProfileStatus = (status: string): SetProfileStatusType => {
    return {
        type: 'SET-PROFILE-STATUS',
        status: status
    }
}

export const getUserProfile = (userId: string) => (dispatch: (action: ActionsType) => void) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getProfileStatus = (userId: string) => (dispatch: (action: ActionsType) => void) => {
    profileAPI.getProfileStatus(userId)
        .then(data => {
            dispatch(setProfileStatus(data))
        })
}

export const updateProfileStatus = (status: string) => (dispatch:Dispatch) => {
    profileAPI.updateProfileStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
}