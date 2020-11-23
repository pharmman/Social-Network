import React from 'react';
import classes from './Preloader.module.css'

export const Preloader = () => {
    return <div className={classes.lds_grid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}