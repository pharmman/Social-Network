import React from 'react';
import styles from './Contact.module.css'


type ContactsPropsType = {
    title: string
    value: any
}


export const Contact = (props: ContactsPropsType) => {
    return (
        <li>
            <span className={styles.item}>{props.title}: {props.value}</span>
        </li>
    )
}