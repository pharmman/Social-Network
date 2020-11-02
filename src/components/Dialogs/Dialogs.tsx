import React, {ChangeEvent} from 'react';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import classes from './Dialogs.module.css'
import {DialogsDataType, MessagesDataType} from '../../redux/store';

type DialogsPropsType = {
    dialogs: Array<DialogsDataType>
    message: Array<MessagesDataType>
    newMessageBody: string
    changeNewMessageBody: (value:string) => void
    onClickSendMessageHandler: () => void
}

export function Dialogs(props: DialogsPropsType) {
    const dialogs = props.dialogs.map(d => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    })

    const messages = props.message.map(m => {
        return <Message key={m.id} message={m.message}/>
    })

    const changeNewMessageBody = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageBody(e.currentTarget.value)
    }

    const sendMessage = () => {
        props.onClickSendMessageHandler()
    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
                <div><textarea value={props.newMessageBody} onChange={changeNewMessageBody}
                               placeholder={'Enter new message here'}/></div>
                <div>
                    <button onClick={sendMessage} className={classes.dialogs__button}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

