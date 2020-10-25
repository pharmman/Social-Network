export type MessagesDataType = {
    id: number
    message: string
}

export type DialogsDataType = {
    id: number
    name: string
}

export type DialogsPageType = {
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

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

type AddPostActionType = {
    type: 'ADD-POST'
}

type ChangingValueForNewPostType = {
    type: 'CHANGING-VALUE-FOR-NEW-POST',
    value:string
}

export type ActionsType = AddPostActionType | ChangingValueForNewPostType

export type StoreType = {
    _state: StateType
    _callSubscriber:() => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 12},
                {id: 3, message: 'Yo Yo Yo', likesCount: 12},
                {id: 4, message: 'It\'s revolution Jhonny!', likesCount: 100500}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Steve'},
                {id: 2, name: 'Tim'},
                {id: 3, name: 'Jhonny'},
                {id: 4, name: 'Andy'},
                {id: 5, name: 'Sasha'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How is your day?'},
                {id: 3, message: 'Introduce Iphone'},
                {id: 4, message: 'Introduce Ipad'},
                {id: 5, message: 'Google suck'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
      return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsDataType = {id: 5, message: this._state.profilePage.messageForNewPost, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = '';
            this._callSubscriber()
        } else if (action.type === 'CHANGING-VALUE-FOR-NEW-POST') {
            this._state.profilePage.messageForNewPost = action.value;
            this._callSubscriber()
        }
    }
}

export const addPostActionCreator = ():AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}

export const changingValueForNewPostActionCreator = (newValue:string):ChangingValueForNewPostType => {
    return {
        type: 'CHANGING-VALUE-FOR-NEW-POST',
        value: newValue
    }
}
