import React from 'react';


type ContactsPropsType = {
    title: string
    value: any
}


export const Contact = (props: ContactsPropsType) => {
    return (
        <div>
            <h4>{props.title}: {props.value}</h4>
        </div>
    )
}