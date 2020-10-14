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
    message:string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsDataType>
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state:StateType = {
    profilePage: {
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
}