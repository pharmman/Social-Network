import React from 'react';
import styles from './Message.module.css';

type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={styles.speechBubble}>
            {props.message}
        </div>
    )
}