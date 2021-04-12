import {addNewMessageActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {ActionsType, DialogsDataType, MessagesDataType} from '../../redux/store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/AuthRedirect';

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    onClickSendMessageHandler: (value:string) => void
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textForNewMessage: state.dialogsPage.textForNewMessage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchToPropsType => {
    return {
        onClickSendMessageHandler: (value:string) => dispatch(addNewMessageActionCreator(value))
    }
}

export default compose<React.ComponentType>(withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)
    )(Dialogs)