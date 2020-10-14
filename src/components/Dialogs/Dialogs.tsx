import React from 'react';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import classes from './Dialogs.module.css'
import {DialogsDataType, MessagesDataType, PostsDataType} from '../../redux/state';

type DialogsPropsType = {
    dialogs: Array<DialogsDataType>,
    message: Array<MessagesDataType>,
}

export function Dialogs (props:DialogsPropsType) {
    const dialogs = props.dialogs.map(d => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    })

    const messages = props.message.map(m => {
        return <Message key={m.id} message={m.message}/>
    })

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogs}
            </div>
            <div>
                {messages}
            </div>
        </div>
    )
}

