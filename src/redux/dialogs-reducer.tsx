import {ActionsType, DialogsPageType, MessagesDataType} from './state';

export const dialogsReducer = (dialogsPage: DialogsPageType, action: ActionsType) => {
    switch (action.type){
        case 'CHANGE-NEW-MESSAGE-BODY':
            dialogsPage.textForNewMessage = action.value;
            return dialogsPage;
        case 'ADD-NEW-MESSAGE':
            const newMessage: MessagesDataType = {id: 6, message: dialogsPage.textForNewMessage};
            dialogsPage.messages.push(newMessage);
            dialogsPage.textForNewMessage = '';
            return dialogsPage;
        default:
            return dialogsPage
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