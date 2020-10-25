import {ActionsType, MessagesDataType, StateType} from './state';

export const dialogsReducer = (state: StateType, action: ActionsType) => {
    switch (action.type){
        case 'CHANGE-NEW-MESSAGE-BODY':
            state.dialogsPage.textForNewMessage = action.value;
            return state;
        case 'CHANGING-VALUE-FOR-NEW-POST':
            const newMessage: MessagesDataType = {id: 6, message: state.dialogsPage.textForNewMessage};
            state.dialogsPage.messages.push(newMessage);
            state.dialogsPage.textForNewMessage = '';
            return state;
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