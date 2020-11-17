import {addNewMessageActionCreator, changeNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {ActionsType, DialogsDataType, DialogsPageType, MessagesDataType} from '../../redux/store';
import {Dispatch} from 'redux';

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    changeNewMessageBody: (value: string) => void,
    onClickSendMessageHandler: () => void
}

type MapStateToPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    textForNewMessage: string
}

const mapStateToProps = (state: StateType): DialogsPageType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textForNewMessage: state.dialogsPage.textForNewMessage
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchToPropsType => {
    return {
        changeNewMessageBody: value => dispatch(changeNewMessageBodyActionCreator(value)),
        onClickSendMessageHandler: () => dispatch(addNewMessageActionCreator())
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)(Dialogs)