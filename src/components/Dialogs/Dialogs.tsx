import React from 'react';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import classes from './Dialogs.module.css'
import {DialogsPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    message: string
}


export function Dialogs(props: DialogsPropsType) {
    const dialogs = props.dialogs.map(d => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    })

    const messages = props.messages.map(m => {
        return <Message key={m.id} message={m.message}/>
    })

    const sendNewMessage = (value:FormDataType) => {
        props.onClickSendMessageHandler(value.message)
        alert(value.message)
    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
                <DialogFormMessage onSubmit={sendNewMessage}/>
            </div>
        </div>
    )
}

const DialogMessage:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'message'} component={'textarea'}/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}


const DialogFormMessage = reduxForm<FormDataType>({form: 'dialog'})(DialogMessage)

