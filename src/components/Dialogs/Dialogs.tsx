import React from 'react';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import classes from './Dialogs.module.css'

export function Dialogs () {
    return (
        <div className={classes.dialogs}>
            <div>
                <Dialog id={1} name={'alex'}/>
            </div>
            <div>
                <Message message={'hello'}/>
            </div>
        </div>
    )
}

