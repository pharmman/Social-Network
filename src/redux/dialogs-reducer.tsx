import {ActionsType, DialogsPageType} from './store';

const initialState = {
    textForNewMessage: '',
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-BODY':
            return {
                ...state, textForNewMessage: action.value
            }
        // dialogsPage.textForNewMessage = action.value;
        // return dialogsPage;
        case 'ADD-NEW-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: state.textForNewMessage}],
                textForNewMessage: ''
            }
        default:
            return state
    }
}
export type ChangeNewMessageBodyType = ReturnType<typeof changeNewMessageBodyActionCreator>
export type AddNewMessageType = ReturnType<typeof addNewMessageActionCreator>
export const changeNewMessageBodyActionCreator = (newValue: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-BODY',
        value: newValue
    } as const
}
export const addNewMessageActionCreator = () => {
    return {
        type: 'ADD-NEW-MESSAGE'
    } as const
}