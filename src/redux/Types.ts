import {AddPostActionType, ChangingValueForNewPostType} from './profile-reducer';
import {AddNewMessageType, ChangeNewMessageBodyType} from './dialogs-reducer';
import {FollowActionType, SetUsersActionType, UnFollowActionType} from './users-reducer';

export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type DialogsPageType = {
    textForNewMessage: string
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
}
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsDataType>
    messageForNewPost: string
}


export type ActionsType = AddPostActionType | ChangingValueForNewPostType | ChangeNewMessageBodyType | AddNewMessageType | FollowActionType | UnFollowActionType | SetUsersActionType