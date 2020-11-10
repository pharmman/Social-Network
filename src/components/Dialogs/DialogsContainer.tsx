import {addNewMessageActionCreator, changeNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {ActionsType} from '../../redux/Types';

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

