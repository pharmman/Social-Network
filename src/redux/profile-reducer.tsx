import {ActionsType, PostsDataType, StateType} from './state';

export const profileReducer = (state: StateType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsDataType = {id: 5, message: state.profilePage.messageForNewPost, likesCount: 0};
            state.profilePage.posts.push(newPost);
            state.profilePage.messageForNewPost = '';
            return state;
        case 'CHANGING-VALUE-FOR-NEW-POST':
            debugger
            state.profilePage.messageForNewPost = action.value;
            return state;
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