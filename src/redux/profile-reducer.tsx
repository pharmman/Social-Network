import {ActionsType, ProfilePageType} from './store';

export type ProfileType = {
    userId: number | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: string | null
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
    photos: {
        small: string | null
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
    profile: {
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: null,
        github: null,
        vk: null,
        facebook: null,
        instagram: null,
        twitter: null,
        website: null,
        youtube: null,
        mainLink: null,
        photos: {
            small: null,
            large: ''
        }
    },
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