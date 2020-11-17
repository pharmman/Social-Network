import {addNewMessageActionCreator, changeNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {ActionsType, DialogsPageType} from '../../redux/store';
import {Dispatch} from 'redux';

export type DialogsPropsType = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>


const mapStateToProps = (state:StateType):DialogsPageType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        textForNewMessage: state.dialogsPage.textForNewMessage
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        changeNewMessageBody: (value: string) => dispatch(changeNewMessageBodyActionCreator(value)),
        onClickSendMessageHandler: () => dispatch(addNewMessageActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)