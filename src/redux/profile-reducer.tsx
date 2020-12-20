import {ActionsType, ProfilePageType} from './store';

export type ProfileType = {
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

const initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
        {id: 3, message: 'Yo Yo Yo', likesCount: 12},
        {id: 4, message: 'It\'s revolution Jhonny!', likesCount: 100500}
    ],
    profile: null,
    isFetching: false
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType):ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.messageForNewPost, likesCount: 0}],
                messageForNewPost: ''
            }
        case 'CHANGING-VALUE-FOR-NEW-POST':
            return {
                ...state,
                messageForNewPost: action.value
            }
        case 'SET-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default :
            return state
    }
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ChangingValueForNewPostType = {
    type: 'CHANGING-VALUE-FOR-NEW-POST',
    value: string
}

export type SetProfileType = ReturnType<typeof setProfile>
export type ToggleFetchingType = ReturnType<typeof toggleFetching>

export const addPost = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
};
export const changingValueForNewPost = (newValue: string): ChangingValueForNewPostType => {
    return {
        type: 'CHANGING-VALUE-FOR-NEW-POST',
        value: newValue
    }
};

export const setProfile = (profile:ProfileType) => {
    return {
        type: 'SET-PROFILE',
        profile
    } as const
}

export const toggleFetching = (isFetching:boolean) => {
    return {
        type: 'TOGGLE-FETCHING',
        isFetching
    } as const
}