import React from 'react';
import classes from './Message.module.css';
import {NavLink} from 'react-router-dom';

type MessagePropsType = {
    message: string
}

export function Message(props:MessagePropsType) {
    return (
        <div className={classes.speechBubble}>
            {props.message}
        </div>
    )
}