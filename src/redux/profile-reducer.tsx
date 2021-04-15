import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {ThunkAction} from 'redux-thunk';
import {ActionsType, StateType, ThunkType} from './store';

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type ProfileStateType = typeof initialState
export type ProfileReducerActionsType =
    ReturnType<typeof setProfileStatusAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof updatePhotoAC>
    | ReturnType<typeof updateProfileAC>
    | ReturnType<typeof addPostAC>
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

const initialState = {
    profile: null as ProfileType | null,
    messageForNewPost: '',
    status: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
        {id: 3, message: 'Yo Yo Yo', likesCount: 12},
        {id: 4, message: 'It\'s revolution Jhonny!', likesCount: 100500}
    ]
}

export const profileReducer = (state = initialState, action: ProfileReducerActionsType): ProfileStateType => {
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
        case 'PROFILE/UPDATE-PROFILE':
            return {...state, profile: action.profile}
        default :
            return state
    }
}

//ActionCreators
export const addPostAC = (value: string) => ({type: 'PROFILE/ADD-POST', value} as const);
export const setUserProfileAC = (profile: ProfileType) => ({type: 'PROFILE/SET-PROFILE', profile} as const)
export const setProfileStatusAC = (status: string) => ({type: 'PROFILE/SET-PROFILE-STATUS', status} as const)
export const deletePostAC = (id: number) => ({type: 'PROFILE/DELETE-POST', id} as const)
export const updatePhotoAC = (photos: { small: string, large: string }) => ({
    type: 'PROFILE/UPDATE-PHOTO', photos} as const)
export const updateProfileAC = (profile: ProfileType) => ({type: 'PROFILE/UPDATE-PROFILE', profile} as const)

//Thunks
export const getProfileStatus = (userId: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfileStatus(userId)
    dispatch(setProfileStatusAC(data))
}

export const getUserProfile = (userId: string | number): ThunkType => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfileAC(data))
        })
}

export const updateProfileStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateProfileStatus(status)
    if (data.resultCode === 0) {
        dispatch(setProfileStatusAC(status))
    }
}

export const updateProfilePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateProfilePhoto(file)
    if (data.resultCode === 0) {
        dispatch(updatePhotoAC(data.data.photos))
    }
}

export const updateProfile = (profile: ProfileType): ThunkAction<Promise<any>, StateType, unknown, ActionsType> => async (dispatch, getState) => {
    let userId = getState().profilePage.profile?.userId
    const data = await profileAPI.updateProfile(profile)
    if (data.resultCode === 0) {
        if (userId) {
            dispatch(getUserProfile(userId.toString()))
        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}