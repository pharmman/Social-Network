import React from 'react';
import {addNewMessageActionCreator, changeNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StateType} from '../../redux/redux-store';
import {ActionsType} from '../../redux/store';
import {connect} from 'react-redux';

const mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        message: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.textForNewMessage
    }
}

const mapDispatchToProps = (dispatch:(action:ActionsType) => void) => {
    return {
        changeNewMessageBody: (value: string) => {
            dispatch(changeNewMessageBodyActionCreator(value))
        },
        onClickSendMessageHandler: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

