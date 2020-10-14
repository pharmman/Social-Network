import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from 'react-router-dom';


type DialogPropsType = {
    name: string
    id: number

}

export function Dialog(props: DialogPropsType) {
    return (
        <div className={classes.dialogName}>
            <NavLink className={classes.name} activeClassName={classes.active} to={`./dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}