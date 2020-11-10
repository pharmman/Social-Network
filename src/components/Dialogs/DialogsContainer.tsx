import React from 'react';
import {addNewMessageActionCreator, changeNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';


export function DialogsContainer() {

    return  <StoreContext.Consumer>
        {
        (store) => {
            const state = store.getState().dialogsPage;
            const changeNewMessageBody = (value: string) => {
                store.dispatch(changeNewMessageBodyActionCreator(value))
            }

            const onClickSendMessageHandler = () => {
                store.dispatch(addNewMessageActionCreator())
            }

           return <Dialogs dialogs={state.dialogs}
                         message={state.messages}
                         newMessageBody={state.textForNewMessage}
                         changeNewMessageBody={changeNewMessageBody}
                         onClickSendMessageHandler={onClickSendMessageHandler}/>
        }}
        </StoreContext.Consumer>
        }

