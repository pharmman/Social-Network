import {addNewMessageActionCreator, changeNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {ActionsType} from '../../redux/store';

const mapStateToProps = (state:StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        message:state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.textForNewMessage
    }
}

const mapDispatchToProps = (dispatch:(action:ActionsType) => void) => {
    return {
        changeNewMessageBody: (value: string) => dispatch(changeNewMessageBodyActionCreator(value)),
        onClickSendMessageHandler: () => dispatch(addNewMessageActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)