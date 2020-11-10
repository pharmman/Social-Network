import {ActionsType, ProfilePageType} from './store';

const initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
        {id: 3, message: 'Yo Yo Yo', likesCount: 12},
        {id: 4, message: 'It\'s revolution Jhonny!', likesCount: 100500}
    ]
}

export const profileReducer = (profilePage: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...profilePage,
                posts: [...profilePage.posts, {id: 5, message: profilePage.messageForNewPost, likesCount: 0}],
                messageForNewPost: ''
            }
        case 'CHANGING-VALUE-FOR-NEW-POST':
            return {...profilePage, messageForNewPost: action.value}
        default :
            return profilePage
    }
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ChangingValueForNewPostType = {
    type: 'CHANGING-VALUE-FOR-NEW-POST',
    value: string
}
export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
};
export const changingValueForNewPostActionCreator = (newValue: string): ChangingValueForNewPostType => {
    return {
        type: 'CHANGING-VALUE-FOR-NEW-POST',
        value: newValue
    }
};