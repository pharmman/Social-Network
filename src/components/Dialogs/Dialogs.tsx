import React from 'react';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import styles from './Dialogs.module.css'
import {DialogsPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, required} from '../../validators/validators';
import {Textarea} from '../common/formContorols/FormControls';

type FormDataType = {
    message: string
}

const maxLength10 = maxLength(10)


export function Dialogs(props: DialogsPropsType) {
    const dialogs = props.dialogs.map(d => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    })

    const messages = props.messages.map(m => {
        return <Message key={m.id} message={m.message}/>
    })

    const sendNewMessage = (value:FormDataType) => {
        props.onClickSendMessageHandler(value.message)
    }

    return (<>
            <h2 className={styles.title}>In progress</h2>
        <div>
            <div className={styles.dialogsContainer}>
                {dialogs}
            </div>
            <div>
                {messages}
                <DialogFormMessage onSubmit={sendNewMessage}/>
            </div>
        </div>
        </>
    )
}

const DialogMessage:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'message'} component={Textarea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}


const DialogFormMessage = reduxForm<FormDataType>({form: 'dialog'})(DialogMessage)

