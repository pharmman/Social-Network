import React from 'react';
import {ContactsType} from '../../../../redux/profile-reducer';


type ContactsPropsType = {
    title: string
    value: string | null | undefined
    contacts: any
}


export const Contact = (props: ContactsPropsType) => {
    return (
        <div>
            <h4>{props.title}: {props.value}</h4>
        </div>
    )
}