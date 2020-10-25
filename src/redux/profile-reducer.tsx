import {ActionsType, PostsDataType, ProfilePageType} from './state';

export const profileReducer = (profilePage: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsDataType = {id: 5, message: profilePage.messageForNewPost, likesCount: 0};
            profilePage.posts.push(newPost);
            profilePage.messageForNewPost = '';
            return profilePage;
        case 'CHANGING-VALUE-FOR-NEW-POST':
            profilePage.messageForNewPost = action.value;
            return profilePage;
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