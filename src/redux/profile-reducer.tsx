import {ActionsType, ProfilePageType, ThunkType} from './store';
import {profileAPI} from '../api/api';

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
        case 'PROFILE/ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.value, likesCount: 0}],
            }
        case 'PROFILE/SET-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'PROFILE/SET-PROFILE-STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'PROFILE/DELETE-POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case 'PROFILE/UPDATE-PHOTO':
            return {...state, profile: {...state.profile, photos: {...action.photos}} as ProfileType}
        default :
            return state
    }
}
export type AddPostActionType = {
    type: 'PROFILE/ADD-POST',
    value: string
}
export type SetProfileStatusType = {
    type: 'PROFILE/SET-PROFILE-STATUS'
    status: string
}
export type SetProfileType = ReturnType<typeof setUserProfile>
export type DeletePostType = ReturnType<typeof deletePost>
export type UpdatePhotoType = ReturnType<typeof updatePhoto>


export const addPostActionCreator = (value: string): AddPostActionType => {
    return {
        type: 'PROFILE/ADD-POST',
        value
    }
};

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'PROFILE/SET-PROFILE',
        profile
    } as const
}

export const setProfileStatus = (status: string): SetProfileStatusType => {
    return {
        type: 'PROFILE/SET-PROFILE-STATUS',
        status: status
    }
}

export const deletePost = (id: number) => ({type: 'PROFILE/DELETE-POST', id} as const)
export const updatePhoto = (photos: { small: string, large: string }) => ({
    type: 'PROFILE/UPDATE-PHOTO',
    photos
} as const)

export const getUserProfile = (userId: string) => (dispatch: (action: ActionsType) => void) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getProfileStatus = (userId: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(data))
}

export const updateProfileStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateProfileStatus(status)
    if (data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}

export const updateProfilePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateProfilePhoto(file)
    if (data.resultCode === 0) {
        dispatch(updatePhoto(data.data.photos))
    }
}

