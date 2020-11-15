import {addNewMessageActionCreator, changeNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {ActionsType} from '../../redux/store';
import {Dispatch} from 'redux';

const mapStateToProps = (state:StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        message:state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.textForNewMessage
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        changeNewMessageBody: (value: string) => dispatch(changeNewMessageBodyActionCreator(value)),
        onClickSendMessageHandler: () => dispatch(addNewMessageActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)