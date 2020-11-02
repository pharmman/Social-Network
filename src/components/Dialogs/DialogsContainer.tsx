import React from 'react';
import {ActionsType, DialogsPageType} from '../../redux/store';
import {addNewMessageActionCreator, changeNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export function DialogsContainer(props: DialogsPropsType) {


    const changeNewMessageBody = (value: string) => {
        props.dispatch(changeNewMessageBodyActionCreator(value))
    }

    const onClickSendMessageHandler = () => {
        props.dispatch(addNewMessageActionCreator())
    }

    return (
        <div>
            <Dialogs dialogs={props.state.dialogs}
                     message={props.state.messages}
                     newMessageBody={props.state.textForNewMessage}
                     changeNewMessageBody={changeNewMessageBody}
                     onClickSendMessageHandler={onClickSendMessageHandler}/>
        </div>
    )
}

