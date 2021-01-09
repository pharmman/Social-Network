import {addNewMessageActionCreator, changeNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {ActionsType, DialogsDataType, MessagesDataType} from '../../redux/store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/AuthRedirect';

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    changeNewMessageBody: (value: string) => void,
    onClickSendMessageHandler: () => void
}

type MapStateToPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    textForNewMessage: string,
    isAuth:boolean
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textForNewMessage: state.dialogsPage.textForNewMessage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchToPropsType => {
    return {
        changeNewMessageBody: value => dispatch(changeNewMessageBodyActionCreator(value)),
        onClickSendMessageHandler: () => dispatch(addNewMessageActionCreator())
    }
}

export default compose(withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)
    )(Dialogs)

