import React from 'react';
import styles from './Dialog.module.css';
import {NavLink} from 'react-router-dom';


type DialogPropsType = {
    name: string
    id: number
}

export function Dialog(props: DialogPropsType) {
    return (
        <div className={styles.dialogName}>
            <NavLink className={styles.name} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}