import {
    AddPostActionType,
    DeletePostType,
    ProfileType,
    SetProfileStatusType,
    SetProfileType,
    UpdatePhotoType, UpdateProfileType
} from './profile-reducer';
import {AddNewMessageType} from './dialogs-reducer';
import {
    ChangeFetchingStatusType,
    FollowType,
    SetCurrentPageType,
    SetTotalUsersCountType,
    SetUsersType,
    ToggleFollowingProgressType,
    UnfollowType
} from './users-reducer';
import {SetAuthDataType, SetCaptchaUrlType} from './auth-reducer';
import {ThunkAction} from 'redux-thunk';
import {StateType} from './redux-store';
import {AppReducerActionsType} from './app-reducer';

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
    profile: ProfileType
    posts: Array<PostsDataType>
    status: string
}

// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }

export type ActionsType =
    AddPostActionType
    | AppReducerActionsType
    | AddNewMessageType
    | FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ChangeFetchingStatusType
    | SetProfileType
    | SetAuthDataType
    | ToggleFollowingProgressType
    | SetProfileStatusType
    | DeletePostType
    | UpdatePhotoType
    | UpdateProfileType
    | SetCaptchaUrlType


export type ThunkType = ThunkAction<void, StateType, unknown, ActionsType>


// export type StoreType = {
//     _state: StateType
//     _callSubscriber: () => void
//     getState: () => StateType
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionsType) => void
// }

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             messageForNewPost: '',
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 12},
//                 {id: 2, message: 'It\'s my first post', likesCount: 12},
//                 {id: 3, message: 'Yo Yo Yo', likesCount: 12},
//                 {id: 4, message: 'It\'s revolution Jhonny!', likesCount: 100500}
//             ]
//         },
//         dialogsPage: {
//             textForNewMessage: '',
//             dialogs: [
//                 {id: 1, name: 'Steve'},
//                 {id: 2, name: 'Tim'},
//                 {id: 3, name: 'Jhonny'},
//                 {id: 4, name: 'Andy'},
//                 {id: 5, name: 'Sasha'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'How is your day?'},
//                 {id: 3, message: 'Introduce Iphone'},
//                 {id: 4, message: 'Introduce Ipad'},
//                 {id: 5, message: 'Google suck'},
//             ]
//         }
//     },
//     _callSubscriber() {
//         console.log('State changed')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
//         this._callSubscriber()
//     }
// }
//
